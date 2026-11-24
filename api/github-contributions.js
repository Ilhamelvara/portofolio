/**
 * Vercel Serverless Function
 * GET /api/github-contributions
 * 
 * Fetches verified contribution calendar from GitHub GraphQL API.
 * Token is strictly kept server-side and never exposed to the client.
 */

const GITHUB_GRAPHQL_ENDPOINT = 'https://api.github.com/graphql';

const CONTRIBUTION_QUERY = `
query($username: String!, $from: DateTime, $to: DateTime) {
  user(login: $username) {
    name
    login
    avatarUrl
    url
    contributionsCollection(from: $from, to: $to) {
      totalCommitContributions
      totalPullRequestContributions
      totalIssueContributions
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
            weekday
            color
          }
        }
        months {
          name
          year
          firstDay
          totalWeeks
        }
      }
    }
  }
}
`;

export default async function handler(req, res) {
  // Support both standard Node.js req/res and Vercel edge/serverless
  if (req.method && req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed. Use GET.' });
  }

  const token = process.env.GITHUB_TOKEN;
  const username = process.env.GITHUB_USERNAME || 'Ilhamelvara';

  if (!token) {
    return res.status(500).json({
      error: 'Server configuration error: GITHUB_TOKEN environment variable is missing.',
    });
  }

  // Parse query params (supports req.query from Express/Vercel or URL search params)
  let year = null;
  if (req.query && req.query.year) {
    year = req.query.year;
  } else if (req.url && req.url.includes('?')) {
    const searchParams = new URL(req.url, 'http://localhost').searchParams;
    year = searchParams.get('year');
  }

  const variables = {
    username,
  };

  // If specific year requested, format ISO strings
  if (year && !isNaN(Number(year))) {
    const selectedYear = parseInt(year, 10);
    variables.from = `${selectedYear}-01-01T00:00:00Z`;
    variables.to = `${selectedYear}-12-31T23:59:59Z`;
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(GITHUB_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': 'MohammadIlham-Portfolio',
      },
      body: JSON.stringify({
        query: CONTRIBUTION_QUERY,
        variables,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({
        error: `GitHub API responded with HTTP status ${response.status}`,
        details: errorText.slice(0, 200),
      });
    }

    const result = await response.json();

    if (result.errors && result.errors.length > 0) {
      return res.status(400).json({
        error: result.errors[0]?.message || 'GraphQL Query Error',
      });
    }

    const userData = result.data?.user;
    if (!userData) {
      return res.status(404).json({
        error: `GitHub user "${username}" was not found.`,
      });
    }

    const calendar = userData.contributionsCollection?.contributionCalendar;

    // Cache-Control header: cache for 30 minutes, stale-while-revalidate for 1 hour
    res.setHeader('Cache-Control', 'public, s-maxage=1800, stale-while-revalidate=3600');
    res.setHeader('Content-Type', 'application/json');

    return res.status(200).json({
      success: true,
      username: userData.login,
      name: userData.name,
      profileUrl: userData.url,
      avatarUrl: userData.avatarUrl,
      year: year ? parseInt(year, 10) : 'last_year',
      totalContributions: calendar?.totalContributions || 0,
      weeks: calendar?.weeks || [],
      months: calendar?.months || [],
    });
  } catch (error) {
    clearTimeout(timeoutId);

    if (error.name === 'AbortError') {
      return res.status(504).json({
        error: 'GitHub API request timed out after 10 seconds.',
      });
    }

    return res.status(500).json({
      error: 'Failed to retrieve GitHub contributions.',
      message: error.message,
    });
  }
}

/**
 * GitHub Service
 * Client-side service to fetch GitHub contributions via the secure serverless backend.
 * Never requests GitHub directly with tokens from the browser.
 */

export async function fetchGitHubContributions(year = null) {
  try {
    const url = year && year !== 'last_year'
      ? `/api/github-contributions?year=${year}`
      : '/api/github-contributions';

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP Error ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch GitHub contributions:', error);
    throw error;
  }
}

import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load server-side environment variables (.env)
  const env = loadEnv(mode, process.cwd(), '')
  process.env.GITHUB_TOKEN = env.GITHUB_TOKEN || process.env.GITHUB_TOKEN
  process.env.GITHUB_USERNAME = env.GITHUB_USERNAME || process.env.GITHUB_USERNAME || 'Ilhamelvara'

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'local-api-github-middleware',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url && req.url.startsWith('/api/github-contributions')) {
              try {
                // Dynamically import serverless function
                const { default: handler } = await import('./api/github-contributions.js')

                // Bridge Connect/Node res to Express/Vercel format
                const enhancedRes = {
                  setHeader(name, value) {
                    res.setHeader(name, value)
                  },
                  status(statusCode) {
                    res.statusCode = statusCode
                    return this
                  },
                  json(body) {
                    res.setHeader('Content-Type', 'application/json')
                    res.end(JSON.stringify(body))
                  },
                }

                return await handler(req, enhancedRes)
              } catch (err) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ error: err.message }))
                return
              }
            }
            next()
          })
        },
      },
    ],
  }
})

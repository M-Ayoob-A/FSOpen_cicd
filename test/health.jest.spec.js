const { spawn } = require('child_process')
const http = require('http')

const PORT = 5123
const BASE_URL = `http://127.0.0.1:${PORT}`

const request = (path) => new Promise((resolve, reject) => {
  const req = http.get(`${BASE_URL}${path}`, (res) => {
    let body = ''

    res.setEncoding('utf8')
    res.on('data', (chunk) => {
      body += chunk
    })
    res.on('end', () => {
      resolve({ status: res.statusCode, body })
    })
  })

  req.on('error', reject)
})

const waitForServer = async () => {
  const deadline = Date.now() + 5000

  while (Date.now() < deadline) {
    try {
      const response = await request('/version')
      if (response.status === 200) return
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 100))
    }
  }

  throw new Error('Server did not start in time')
}

describe('health endpoint', () => {
  let server

  beforeAll(async () => {
    server = spawn(process.execPath, ['app.js'], {
      cwd: process.cwd(),
      env: { ...process.env, PORT: String(PORT) },
      stdio: 'ignore'
    })

    await waitForServer()
  }, 10000)

  afterAll(() => {
    server.kill()
  })

  it('returns OK', async () => {
    const response = await request('/health')

    expect(response.status).toBe(200)
    expect(response.body).toBe('OK')
  })
})

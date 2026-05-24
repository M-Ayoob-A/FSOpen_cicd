const express = require('express')
const app = express()
// get the port from env variable
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))
app.get('/health', (req,res) => {
  // eslint-disable-next-line no-constant-condition
  if(true) throw new Error('test error')
  res.status(200).json({ status: 'ok' })
})

const start = async () => {
  app.listen(PORT)
  console.log(`server started on port ${PORT}`)
}

start()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Go to /user :)')
  })  

app.get('/user', (req, res) => {
  res.send('Hello Users from Express')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express');
const app = express()
const port = 4000

app.get('/api', function (req, res) {
  res.send('passed')
})
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
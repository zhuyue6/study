import express = require('express')
import path = require('path')
import * as router from './routers/index'
const app = express()
const port = 3000
router.create(app)
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
})
app.listen(port, () => console.log(`app start on port ${port}`))
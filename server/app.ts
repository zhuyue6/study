import express = require('express')
import path = require('path')
import fs = require('fs')
// import router = require('./routers/index')
const app = express()
const port = 3000

app.use('/', express.static(path.join(__dirname, '../dist')))
app.listen(port, () => console.log(`app start on port ${port}!`))
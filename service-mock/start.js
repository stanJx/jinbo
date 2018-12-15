const express = require('express');
const app = express();

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('', require('./mock/index'))
// app.use('', require('./mock/db'))
app.listen(3003)


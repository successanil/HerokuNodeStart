var express = require('express')

var app = express()

const path = require('path')
const PORT = process.env.PORT || 5000



app.listen(PORT, () => console.log(`Listening on ${PORT}`))


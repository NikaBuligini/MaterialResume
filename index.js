'use strict'

const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const path = require('path')
const http = require('http')

const app = express()
const port = process.env.PORT || 8080

// to support JSON-encoded bodies
app.use(bodyParser.json())
// to support URL-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}))

// to hold session
app.use(session({
  secret: 'gers1g5e10gt0hcbBRH1h',
  resave: false,
  saveUninitialized: true
}))

app.set('views', path.resolve(__dirname, 'app/views'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// Disable etag headers on responses
app.disable('etag')

app.use('/', require('./routes'))

// Set /public as our static content dir
app.use('/', express.static(path.join(__dirname, '/public/')))

// Fire it up (start our server)
http.createServer(app).listen(port, () => {
  console.log('Express server listening on port ' + port)
})

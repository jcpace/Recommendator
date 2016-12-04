const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const parser = require('body-parser')
const morgan = require('morgan')
const routes = require('./routes')
const mongoose = require('mongoose')
const passport = require('passport')
const flash = require('connect-flash')
const cookieParser = require('cookie-parser')
const session = require('express-session')

// port settings
let port = process.env.PORT || 3000

// web socket protocol on localhost on port 3000
server.listen(port, () => {
  console.log(`Listen to http://localhost:${port}`)
})

// database connection
const dbURI = 'mongodb://rebels:sleber@ds119618.mlab.com:19618/recommendatordb'
mongoose.connect(dbURI)
const db = mongoose.connection

// CONNECTION EVENTS
// When successfully connected
db.on('connected', () => {
  console.log('Mongoose default connection open to ' + dbURI)
})
// If the connection throws an error
db.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err)
})
// When the connection is disconnected
db.on('disconnected', () => {
  console.log('Mongoose default connection disconnected')
})
// If the Node process ends, close the Mongoose connection
process.on('SIGINT', () => {
  db.close(() => {
    console.log('Mongoose default connection disconnected through app termination')
    process.exit(0)
  })
})

// Middleware
// Body Parser, Morgan, and Public Compiled folder
app.use(express.static('public'))
app.use(morgan('dev'))
app.use(parser.urlencoded({extended: true}))
app.use(parser.json())
app.use(cookieParser()) // read cookies (needed for auth)

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })) // session secret
app.use(passport.initialize())
app.use(passport.session()) // persistent login sessions
app.use(flash()) // use connect-flash for flash messages stored in session

// Render the index.html
app.get('/', (req, res) => { res.sendFile('index.html') })

app.use('/api', routes) // when you add api routes in routes.js

// Web socket on connection
io.on('connection', (socket) => {
  io.emit('this', { will: 'be received by everyone' })

    // disconnect the websocket when user leaves
  socket.on('disconnect', () => {
    io.emit('user disconnected')
  })
})

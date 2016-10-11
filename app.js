// import express
var express = require('express')

// instantiating the express server
var app = express()
var port = 3000

// require path-name


// middleware for all requests
// running express with ejs
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index')
})

app.use(express.static(__dirname + '/public'));

app.listen(port)
console.log('server running at http://localhost:' + port + '/')

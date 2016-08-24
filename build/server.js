var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('../webpack.config')

var app = express()
var compiler = webpack(config)

app.use(express.static('public'))
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: { colors: true },
  quiet: true
}))
app.use(require("webpack-hot-middleware")(compiler))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '..', '/index.html'))
})

app.listen(8080, "0.0.0.0", function (err) {
  if (err) {
    console.log(err)
    return
  }

  console.log('Running server at http://0.0.0.0:8080')
})

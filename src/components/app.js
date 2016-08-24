module.exports = function () {
  var img = new Image()
  img.src = require('file!../images/logo.png')
  return img
}

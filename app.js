var express = require('express')
var app = express()

app.get('/', function (req, res) {
  var index = __dirname + '/index.html';
  res.sendFile(index);
})

app.use(express.static(__dirname));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
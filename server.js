var express = require('express');
var request = require('request');
var fs = require('fs');

var app = express();

app.get('/', function (req, res) {
  request('http://www.cprogramming.com/tutorial/computersciencetheory/heapremove.jpg').pipe(fs.createWriteStream('heapremove.jpg'))
});

app.post('/upload', function (req, res) {
  res.send('POST /upload');
});


app.listen(3000);
const express = require('express');
const bodyParser = require('body-parser');



const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(__dirname + '../client'));
app.use(express.static(__dirname + '/node_modules'));

app.get('/', function (req, res) {
  res.render("index.html")
});


app.post('/', function (req, res) {
  
});


var port = 3000

app.listen(port, function() {
  console.log('listening on port' + port);
});



'use strict';

let open = require('open');
let express = require('express');
let app = express();
let path = require('path');

app.set('views', path.join(__dirname, '../client'));
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index');
});

app.use(express.static('test/manual/client'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  open('http://localhost:3000/', 'chromium-browser');
});

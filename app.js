var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();

var index = require("./routes/index");

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static folder
app.use(express.static(path.join(__dirname, '/public')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);

app.listen(process.env.PORT, process.env.IP);
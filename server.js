var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var rainbowFacebook = require('./routes/rainbowFacebook');
var rainbowLinkedIn = require('./routes/rainbowLinkedIn');

var port = 3000;

var app = express();

// View Engin

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/rainbowdata.api.facebook', rainbowFacebook);
app.use('/rainbowdata.api.linkedin', rainbowLinkedIn);

app.listen(port, function(){
   console.log('Server started on port' +port);
});

//Create web server
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/comments');
var Comment = require('./models/commentModel');
var commentRouter = require('./routes/commentRoutes')(Comment);
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', commentRouter);

app.use(function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, function() {
    console.log('Gulp is running my app on PORT: ' + port);
})

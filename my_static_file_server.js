var express = require('express'),
    app = express();

// var port = process.env.PORT || 8080;

// app.set('view engine', 'ejs');

app.use(express.static(__dirname + 'js'));

app.get('/', function(request, response) {
  response.render('index');
});

app.listen(8080);

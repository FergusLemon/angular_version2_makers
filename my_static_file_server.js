var express = require('express'),
    app = express();

// var port = process.env.PORT || 8080;

// app.set('view engine', 'ejs');

app.use(express.static(__dirname));

app.get('/', function(request, response) {
  response.render('index.html');
});

app.listen(8080);

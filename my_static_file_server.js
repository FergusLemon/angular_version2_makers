var express = require('express'),
    app = express();

var port = process.env.PORT || 8080;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.render('index');
});

app.listen(port, function() {
  console.log('This app is running on http://localhost:' + port);
});

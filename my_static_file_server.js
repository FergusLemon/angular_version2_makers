var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/js'));

app.get('/', function(request, response) {
  response.render('index');
});

app.listen(process.env.PORT || 8080);

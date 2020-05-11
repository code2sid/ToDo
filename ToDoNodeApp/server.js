var express = require('express');
var log = require('morgan')('dev');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

var properties = require('./config/properties');
var db = require('./config/database');
var todoRoutes = require('./api/todos/todos.routes');
var usersRoutes = require('./api/users/users.route');
var app = express();

var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({extended:true});

var router = express.Router();

db();
app.set('secretKey', 'todoNodeRestApi');

app.use(log);
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
     res.setHeader("Access-Control-Allow-Credentials", "true");
     res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
     res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
   next();
 });

app.use('/api', usersRoutes);
// todoRoutes(router);
app.use('/api', validateUser, todoRoutes);

function validateUser(req, res, next) {
  jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded) {
    if (err) {
      res.json({status:"error", message: err.message, data:null});
    }else{
      // add user id to request
      req.body.userId = decoded.id;
      next();
    }
  });
  
}


app.get('/favicon.ico', function(req, res) {
  res.sendStatus(204);
});

app.listen(properties.PORT, (req, res) => {
    console.log(`Server is running on ${properties.PORT} port.`);
})

module.exports = app; // for testing
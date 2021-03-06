var restify = require('restify');
var handlers = require('./handlers');

var server = {};

server.start = function () {
  var instance = restify.createServer();

  instance.use(restify.fullResponse());
  instance.use(restify.bodyParser());
  instance.use(function crossOrigin(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    return next();
  });

  instance.get('/user', handlers.getUsers);
  instance.get('/user/:id', handlers.getUser);
  instance.del('/user/:id', handlers.removeUser);

  instance.get('/payment', handlers.getPayments);
  instance.get('/payment/:id', handlers.getPayment);
  instance.post('/payment', handlers.postPayment);

  instance.listen(9000, function () {
    console.log('%s listening at %s', instance.name, instance.url);
  });
};

module.exports = server;
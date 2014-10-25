var restify = require('restify');
var handlers = require('./handlers');

var server = {};

server.start = function () {
  var instance = restify.createServer();

  instance.get('/user', handlers.getUsers);
  instance.get('/user/:id', handlers.getUser);

  instance.listen(9000, function () {
    console.log('%s listening at %s', instance.name, instance.url);
  });
};

module.exports = server;
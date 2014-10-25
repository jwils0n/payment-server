var db = require('./database');
var _ = require('lodash');

var handlers = {};

handlers.getUsers = function (req, res, next) {
  res.send(db.users);
  next();
};

handlers.getUser = function (req, res, next) {
  var user = _.find(db.users, { id: parseInt(req.params.id, 10) });

  res.send(user);
  next();
};

module.exports = handlers;
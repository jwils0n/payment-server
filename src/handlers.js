var db = require('./database');
var _ = require('lodash');
var moment = require('moment');

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

handlers.getPayments = function (req, res, next) {
  res.send(db.payments);
  next();
};

handlers.getPayment = function (req, res, next) {
  var payment = _.find(db.payments, { id: parseInt(req.params.id, 10) });

  res.send(payment);
  next();
};

handlers.postPayment = function (req, res, next) {
  var payment = {
    id: db.payments.length + 1,
    userId: _.sample(db.users).id,
    lastFour: req.params.ccNumber,
    expMonth: req.params.expMonth,
    expYear: req.params.expYear,
    cardholder: req.params.cardholder,
    createdOn: moment().unix()
  };

  db.payments.push(payment);
  res.send(204);
  next();
};

module.exports = handlers;
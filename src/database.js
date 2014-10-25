var _ = require('lodash');

var db = {};

db.users = [
  { id: 1, fName: 'Rick', lName: 'Grimes', email: 'rgrimes@jwilson.us' },
  { id: 2, fName: 'Daryl', lName: 'Dixon', email: 'ddison@jwilson.us' },
  { id: 3, fName: 'Carl', lName: 'Grimes', email: 'cgrimes@jwilson.us' },
  { id: 4, fName: 'Glenn', lName: 'Rhee', email: 'grhee@jwilson.us' },
  { id: 5, fName: 'Lori', lName: 'Grimes', email: 'lgrimes@jwilson.us' },
  { id: 6, fName: 'Carol', lName: 'Peletier', email: 'cpeletier@jwilson.us' },
  { id: 7, fName: 'Maggie', lName: 'Greene', email: 'mgreene@jwilson.us' },
  { id: 8, fName: 'Beth', lName: 'Greene', email: 'bgreene@jwilson.us' },
  { id: 9, fName: 'Herschel', lName: 'Greene', email: 'hgreene@jwilson.us' },
  { id: 10, fName: 'Merle', lName: 'Dixon', email: 'mdixon@jwilson.us' },
  { id: 11, fName: 'Dale', lName: 'Horvath', email: 'dhorvath@jwilson.us' },
  { id: 12, fName: 'Sophia', lName: 'Peletier', email: 'speletier@jwilson.us' },
  { id: 13, fName: 'Rosita', lName: 'Espinosa', email: 'respinosa@jwilson.us' },
  { id: 14, fName: 'Tara', lName: 'Chambler', email: 'tchambler@jwilson.us' },
  { id: 15, fName: 'Shane', lName: 'Walsh', email: 'swalsh@jwilson.us' },
];

db.payments = [];

module.exports = db;
const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Book
    .find(req.query)
    .then(data => res.json(data))
    .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book
    .find(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book
    .findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(data => res.json(data))
    .catch(err => res.status(422).json(err));
  },
  delete: function(req, res) {
    db.Book
    .findOneAndDelete({ _id: req.params.id }, req.body)
    .then(data => res.json(data))
    .catch(err => res.status(422).json(err));
  }
};
const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

// get a list of ninjas from the db
router.get('/', function (req, res, next) {
  Todo.find({}).then(function (todos) {
    res.send(todos);
  });
});

// add a new ninja to the db
router.post('/', function (req, res, next) {
  Todo.create(req.body).then(function (todo) {
    res.send(todo);
  }).catch(next);
});

// update a ninja in the db
router.put('/:id', function (req, res, next) {
  Todo.findOneAndUpdate({ _id: req.params.id }, req.body).then(function () {
    Todo.findOne({ _id: req.params.id }).then(function (todo) {
      res.send(todo);
    });
  }).catch(next);
});

// delete a ninja from the db
router.delete('/:id', function (req, res, next) {
  Todo.findOneAndDelete({ _id: req.params.id }).then(function (todo) {
    res.send(todo);
  }).catch(next);
});

module.exports = router;
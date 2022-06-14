// imports the todo model
const Todo = require("../models/todos.model");

// make a controller for get all todos
exports.getAllTodos = (req, res) => {
  res.status(200).json({
    message: "Get all todos successfully.",
  });
};

// make a controller for get a todo
exports.getATodo = (req, res) => {
  res.status(200).json({
    message: "Get a todo successfully.",
  });
};

// make a controller for create a todo
exports.createATodo = async (req, res) => {
  const newTodo = new Todo(req.body);
  await newTodo.save((err) => {
    if (err) {
      res.status(500).json({
        message: err.message,
      });
    } else {
      res.status(201).json({
        message: "Create a new todo successfully.",
      });
    }
  });
};

// make a controller for create many todos
exports.createManyTodos = async (req, res) => {
  await Todo.insertMany(req.body, (err) => {
    if (err) {
      res.status(500).json({
        message: err.message,
      });
    } else {
      res.status(201).json({
        message: "Create many new todos successfully.",
      });
    }
  });
};

// make a controller for update a todo
exports.updateATodo = async (req, res) => {
  res.status(200).json({
    message: "Update a todo successfully.",
  });
};

// make a controller for delete a todo
exports.deleteATodo = (req, res) => {
  res.status(200).json({
    message: "Delete a todo successfully.",
  });
};

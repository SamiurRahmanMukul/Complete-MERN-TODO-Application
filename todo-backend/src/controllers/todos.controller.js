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
exports.createATodo = (req, res) => {
  res.status(200).json({
    message: "Create a todo successfully.",
  });
};

// make a controller for create many todos
exports.createManyTodos = (req, res) => {
  res.status(200).json({
    message: "Create many todos successfully.",
  });
};

// make a controller for update a todo
exports.updateATodo = (req, res) => {
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

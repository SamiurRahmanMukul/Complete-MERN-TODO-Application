const router = require("express").Router();
const { getAllTodos, getATodo, createATodo, createManyTodos, updateATodo, deleteATodo } = require("../controllers/todos.controller");

router.get("/all", getAllTodos);
router.get("/:id", getATodo);
router.post("/", createATodo);
router.post("/many", createManyTodos);
router.put("/:id", updateATodo);
router.delete("/:id", deleteATodo);

module.exports = router;

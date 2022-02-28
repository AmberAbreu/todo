const router = require("express").Router();
const {
    models: { Todo },
} = require("../db");

//address errors with actual status code, something with information that can be seen (UX/UI friendly)
router.get("/", async (req, res, next) => {
    try {
        const todos = await Todo.findAll();
        res.json(todos);
    } catch (err) {
        next(err);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const todo = await Todo.findByPk(req.params.id);
        if (todo) {
            res.json(todo);
        } else {
            next({ message: "some problem occured", status: 404 });
        }
    } catch (err) {
        next(err);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const createdTodo = await Todo.create(req.body);
        res.send(createdTodo);
    } catch (err) {
        next(err);
    }
});

router.put("/:id", async (req, res, next) => {
    try {
        const todo = await Todo.findByPk(req.params.id);
        const updatedTodo = await todo.update(req.body);
        res.json(updatedTodo);
    } catch (err) {
        next(err);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const todo = await Todo.findByPk(req.params.id);
        await todo.destroy();
        res.json(todo);
    } catch (err) {
        next(err);
    }
});

router.delete("/", async (req, res, next) => {
    try {
        const todos = await Todo.findAll();
        await Todo.destroy({ where: {}, trucate: true });
        res.json(todos);
    } catch (err) {
        next(err);
    }
});

module.exports = router;

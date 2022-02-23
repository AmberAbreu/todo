
const router = require('express').Router()
const { models: { Todo } } = require('../db')


router.get('/', async (req, res, next) => {
	try {
		const todos = await Todo.findAll()
		res.json(todos)
	} catch (err) {
		next(err)
	}
})

router.get('/:id', async (req, res, next) => {
	try {
		const category = await Todo.findByPk(req.params.id)
		console.log(req.params.id)
		if (category) {
			res.json(category)
		} else {
			next({ message: "some problem occured", status: 404 })
		}
	} catch (err) {
		next(err)
	}
})

router.post('/', async (req, res, next) => {
	try {
		const createdTodo = await Todo.create(req.body)
		res.send(createdTodo)
	} catch (err) {
		next(err)
	}
})

router.put('/:id', async (req, res, next) => {
	try {
		const todo = await Todo.findByPk(req.params.id)
		const updatedTodo = await todo.update(req.body)
		res.json(updatedTodo)
	} catch (err) {
		next(err)
	}
})

router.delete('/:id', async (req, res, next) => {
	try {
		const expense = await Todo.findByPk(req.params.id)
		await expense.destroy()
		res.json(expense)
	} catch (err) {
		next(err)
	}
})

module.exports = router
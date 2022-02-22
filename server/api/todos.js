
const router = require('express').Router()
const { models: { Todos } } = require('../db.js')
module.exports = router

router.get('/', async (req, res, next) => {
	try {
		const todos = await Todos.findAll()
		res.json(todos)
	} catch (err) {
		next(err)
	}
})

router.get('/:id', async (req, res, next) => {
	try {
		const category = await Todos.findByPk(req.params.id, { include: Expenses })
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

router.post('/:id', async (req, res, next) => {
	try {
		const createdTodo = await Todo.create(req.body)
		res.send(createdTodo)
	} catch (err) {
		next(err)
	}
})

router.put('/:id', async (req, res, next) => {
	try {
		const todo = await Expenses.findByPk(req.params.id)
		const updatedTodo = await todo.update(req.body)
		res.json(updatedExpense)
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
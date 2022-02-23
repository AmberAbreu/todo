import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

function TodoForm({ todo }) {

	const [input, setInput] = useState(todo ? todo.name : '')

	const inputRef = useRef(null)

	useEffect(() => {
		inputRef.current.focus()
	})

	const handleChange = e => {
		setInput(e.target.value);
	}

	const handleSubmit = e => {
		e.preventDefault();
		if (todo) {
			function updateTodo() {
				axios.put(`/todos/${todo.id}`, {
					name: input
				})
			}
			updateTodo()
		} else {
			function addTodo() {
				try {
					axios.post(`/todos`, {
						name: input,
						isComplete: false
					})
				} catch (error) {
					console.log(error);
				}

			}
			addTodo()
		}
	}

	return (
		<form className="todo-form" onSubmit={handleSubmit}>
			{todo ? (
				<>
					<input
						type="text"
						placeholder="Edit this todo"
						value={input}
						name="text"
						className="todo-input"
						onChange={handleChange}
						ref={inputRef}
					/>
					<button className="todo-button edit">Update</button>
				</>
			) : (
				<>
					<input
						type="text"
						placeholder="Add a todo"
						value={input}
						name="text"
						className="todo-input"
						onChange={handleChange}
						ref={inputRef}
					/>
					<button className="todo-button">Add a todo</button>
				</>
			)}
		</form>
	);
}
export default TodoForm
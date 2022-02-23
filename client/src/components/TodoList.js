import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Todo from './Todo'

export default function TodoList() {
	const [todos, setTodos] = useState([])

	useEffect(() => {
		async function getTodos() {
			try {
				const { data } = await axios.get('/todos')
				setTodos(data)
			} catch (error) {
				console.log(error)
			}
		}
		getTodos()
	}, [])

	return (
		<div>
			{todos.map(todo => {
				return <Todo name={todo.name} />
			})}
		</div>
	)
}

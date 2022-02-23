import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Todo from './Todo'
import Form from './form/Form'

import { FaPlus } from 'react-icons/fa'


export default function TodoList() {
	const [todos, setTodos] = useState([])
	const [addMode, setAddMode] = useState(false)

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
		<div className='todo-list'>
			<h1>Things to do</h1>
			{addMode ?
				(<Form />)
				: <div className='icon' onClick={() => setAddMode(!addMode)} ><FaPlus /></div>
			}

			{todos.map(todo => {
				return (
					<Todo
						todo={todo}
						key={todo.id}
					/>
				)
			})}
		</div>
	)
}

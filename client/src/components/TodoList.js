import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Todo from './Todo'
import Form from './Form'

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
				console.log(error) //show an alert to user
			}
		}
		getTodos()
	}, [todos])

	return (
		<div className='todo-list'>
			<h1>Things to do</h1>
			{addMode ?
				(<Form setAddMode={setAddMode} />)
				: <div className='icon' onClick={() => setAddMode(!addMode)} ><FaPlus /></div>
			}

			{todos.sort(function (a, b) {
				if (a.name < b.name) { return -1; }
				if (a.name > b.name) { return 1; }
				return 0;
			}).map(todo => {
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

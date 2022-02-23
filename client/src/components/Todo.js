import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Form from './form/Form'

import { FaEdit } from 'react-icons/fa'
import { FaTrashAlt } from 'react-icons/fa'

export default function Todo({ todo }) {
	const { name, id, isComplete } = todo

	const [editMode, setEditMode] = useState(false)

	const deleteTodo = async (id) => {
		try {
			await axios.delete(`/todos/${id}`);
		} catch (error) {
			console.log(error);
		}
	};

	function markComplete() {
		try {
			axios.put(`/todos/${id}`, {
				isComplete: !isComplete
			})
		} catch (error) {
			console.log(error);
		}

	}

	useEffect(() => {
	}, [name])


	return (
		<div
			className={isComplete ? 'todo-row complete' : 'todo-row'}
			key={id}
		>
			{editMode ?
				(<Form todo={todo} setEditMode={setEditMode} />)
				: <p onClick={markComplete}>{name}</p>
			}
			<div className='icons'>
				<div><FaEdit className='icon' onClick={() => setEditMode(!editMode)} /></div>
				<div className='icon'><FaTrashAlt onClick={() => deleteTodo(id)} /></div>
			</div>
		</div>
	)
}

import React, { useState } from 'react'
import axios from 'axios'

import { FaEdit } from 'react-icons/fa'

export default function EditTodo({ todo }) {

	const { id, name, isCompleted } = todo
	const [update, setUpdate] = useState({})

	const editTodo = async (update) => {
		try {
			await axios.put(`/todos/${id}`, update);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div><FaEdit className='icon' onClick={() => editTodo(id)} /></div>
	)
}

//onclick, 
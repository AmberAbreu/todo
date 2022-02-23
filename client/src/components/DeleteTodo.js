import React from 'react'
import axios from 'axios'


import { FaTrashAlt } from 'react-icons/fa'

export default function DeleteTodo({ id }) {

	const deleteTodo = async (id) => {
		try {
			await axios.delete(`/todos/${id}`);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='icon'><FaTrashAlt onClick={() => deleteTodo(id)} /></div>
	)
}

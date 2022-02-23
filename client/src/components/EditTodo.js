import React, { useState } from 'react'
import axios from 'axios'

import Form from './form/Form'

import { FaEdit } from 'react-icons/fa'

export default function EditTodo({ todo }) {

	const { id, name, isCompleted } = todo
	const [update, setUpdate] = useState({})



	return (
		<div>
			<FaEdit className='icon' onClick={() => editTodo(id)} />
			{/* <Form todo={todo} /> */}
			{/* edit form should pop up on click, pass down the todo as props */}
		</div>
	)
}

//onclick, 
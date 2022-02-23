import React from 'react'
import DeleteTodo from './DeleteTodo'
import EditTodo from './EditTodo'

export default function Todo({ todo }) {
	const { name, id, isComplete } = todo
	return (
		<div className={isComplete ? 'todo-row complete' : 'todo-row'} key={id}>
			{name}
			<DeleteTodo id={id} />
			<EditTodo todo={todo} />
		</div>
	)
}

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function TodoForm({
    todo,
    setEditMode,
    setAddMode,
    setRenderName,
    setTodos,
    todos,
}) {
    const [input, setInput] = useState(todo ? todo.name : "");

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo) {
            async function updateTodo() {
                try {
                    const { data } = await axios.put(`/todos/${todo.id}`, {
                        name: input,
                    });
                    setRenderName(data.name);
                } catch (error) {
                    console.log(error);
                }
            }
            setEditMode(false);
            updateTodo();
        } else {
            async function addTodo() {
                try {
                    const { data } = await axios.post(`/todos`, {
                        name: input,
                        isComplete: false,
                    });
                    setTodos([...todos, data]);
                } catch (error) {
                    console.log(error);
                }
            }
            setAddMode(false);
            addTodo();
        }
    };

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
export default TodoForm;

import React, { useEffect, useState } from "react";
import axios from "axios";

import Todo from "./Todo";
import Form from "./Form";
import Modal from "./Modal";

import { FaPlus } from "react-icons/fa";

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [addMode, setAddMode] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handleDeleteAll = async () => {
        try {
            await axios.delete(`/todos/`);
            setTodos([]);
        } catch (error) {
            setOpenModal(true);
            console.log(error);
        }
    };

    useEffect(() => {
        async function getTodos() {
            try {
                let { data } = await axios.get("/todos");
                data = data.sort((a, b) => a.id - b.id);
                setTodos(data);
            } catch (error) {
                setOpenModal(true);
                console.log(error);
            }
        }
        getTodos();
    }, []);

    return (
        <div className="todo-list">
            <h1>Today's Todos</h1>
            {addMode ? (
                <Form
                    setAddMode={setAddMode}
                    todos={todos}
                    setTodos={setTodos}
                />
            ) : (
                <div className="icon" onClick={() => setAddMode(!addMode)}>
                    <FaPlus />
                </div>
            )}

            {todos.map((todo) => {
                return (
                    <Todo
                        todo={todo}
                        key={todo.id}
                        setTodos={setTodos}
                        todos={todos}
                    />
                );
            })}
            {todos.length && (
                <button className="btn" onClick={handleDeleteAll}>
                    Clear todos
                </button>
            )}
            {openModal && <Modal setOpenModal={setOpenModal} />}
        </div>
    );
}

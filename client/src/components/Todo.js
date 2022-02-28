import React, { useState } from "react";
import axios from "axios";

import Form from "./Form";

import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

export default function Todo({
    todo,
    setTodos,
    todos,
    setErrorMsg,
    setOpenModal,
}) {
    const { name, id, isComplete } = todo;

    const [completion, setCompletion] = useState(todo.isComplete);
    const [renderName, setRenderName] = useState(name);
    const [editMode, setEditMode] = useState(false);

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`/todos/${id}`);
            setTodos(todos.filter((todo) => todo.id !== id));
        } catch (error) {
            setOpenModal(true);
        }
    };

    async function markComplete() {
        try {
            const { data } = await axios.put(`/todos/${id}`, {
                isComplete: !isComplete,
            });
            setCompletion(!completion);
        } catch (error) {
            setOpenModal(true);
            setErrorMsg(error.response.data);
        }
    }

    return (
        <div className={completion ? "todo-row complete" : "todo-row"} key={id}>
            {editMode ? (
                <Form
                    todo={todo}
                    setEditMode={setEditMode}
                    setRenderName={setRenderName}
                    setOpenModal={setOpenModal}
                    setErrorMsg={setErrorMsg}
                />
            ) : (
                <p onClick={markComplete}>{renderName}</p>
            )}
            <div className="icons">
                <div>
                    <FaEdit
                        className="icon"
                        onClick={() => setEditMode(!editMode)}
                    />
                </div>
                <div className="icon">
                    <FaTrashAlt onClick={() => deleteTodo(id)} />
                </div>
            </div>
        </div>
    );
}

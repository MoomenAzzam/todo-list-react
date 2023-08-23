import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import { Todos } from "../App";
import { Link } from "react-router-dom";

function TodoDetails() {
    const { id } = useParams();
    const { todos, setTodos } = useContext(Todos);
    let [edit, setEdit] = useState(false);
    const data = todos.filter((t) => t.id == id);
    const [input, setInput] = useState(data[0].name);
    const handleEditBtn = () => {
        setEdit(true);
    };

    const handleInputValue = (event) => {
        setInput(event.target.value);
    };
    const handleSaveBtn = (id) => {
        const updatedTodos = [...todos];
        updatedTodos.map((t, i) => {
            if (t.id == id) {
                updatedTodos[i].name = input;
                setTodos(updatedTodos);
            }
        });
    };
    return (
        <div className="todo-details">
            <p>Task is :</p>
            <h2> {data[0].name}</h2>
            {!edit && (
                <div className="buttons">
                    <button
                        className="edit"
                        onClick={() => {
                            handleEditBtn();
                        }}
                    >
                        Edit Task
                    </button>
                </div>
            )}
            {edit && (
                <>
                    <input
                        type="text"
                        placeholder="New Task"
                        className="edit-input"
                        onChange={handleInputValue}
                    />
                    <Link to="/">
                        <button
                            className="save"
                            onClick={() => {
                                handleSaveBtn(id);
                            }}
                        >
                            Save
                        </button>
                    </Link>
                </>
            )}
        </div>
    );
}

export default TodoDetails;

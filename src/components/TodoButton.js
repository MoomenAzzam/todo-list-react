import React, { useContext } from "react";
import { Todos } from "../App";

function TodoButton() {
    const { todos, setTodos, inputTodo, setInputTodo } = useContext(Todos);
    const handleAddTodo = () => {
        if (inputTodo) {
            const currentTimeInMilliseconds = new Date().getTime();
            setTodos([
                ...todos,
                {
                    id: currentTimeInMilliseconds,
                    name: inputTodo,
                    isDone: false,
                },
            ]);

            setInputTodo("");
        }
    };
    return (
        <div className="add-task">
            <button type="button" onClick={handleAddTodo}>
                Add Task
            </button>
        </div>
    );
}

export default TodoButton;

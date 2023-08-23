import React, { useContext } from "react";
import TodoButton from "./TodoButton";
import { Todos } from "../App";

function TodoForm() {
    const { inputTodo, setInputTodo, selectedFilter, setSelectedFilter } =
        useContext(Todos);
    const handleInputChange = (event) => {
        setInputTodo(event.target.value);
    };
    const handleFilterChange = (event) => {
        setSelectedFilter(event.target.value);
    };
    return (
        <div className="todo-form">
            <form>
                <input
                    type="text"
                    placeholder="New Task"
                    value={inputTodo}
                    onChange={handleInputChange}
                />
                <TodoButton />
                <select
                    id="filter"
                    value={selectedFilter}
                    onChange={handleFilterChange}
                >
                    <option value="all">All</option>
                    <option value="isDone">Is Done</option>
                    <option value="notDone">Not Done</option>
                </select>
            </form>
        </div>
    );
}

export default TodoForm;

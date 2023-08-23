import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Todos } from "../App";

function Todo() {
    const { todos, setTodos, selectedFilter } = useContext(Todos);
    const handelDoneTask = (id) => {
        const updatedTodos = [...todos];
        updatedTodos.map((t, i) => {
            if (t.id == id) {
                updatedTodos[i].isDone = !updatedTodos[i].isDone;
                setTodos(updatedTodos);
            }
        });
    };
    const handelDeleteTask = (id) => {
        const updatedTodos = todos.filter((t, i) => t.id !== id);
        setTodos(updatedTodos);
    };
    return (
        <>
            {todos
                .filter((todo) => {
                    if (selectedFilter === "all") return true;
                    if (selectedFilter === "isDone") return todo.isDone;
                    if (selectedFilter === "notDone") return !todo.isDone;
                    return false;
                })
                .map((todo, index) => (
                    <div className="todo" key={todo.id}>
                        <Link to={`/todoDetails/${todo.id}`}>
                            <p className={todo.isDone ? "task-done" : ""}>
                                {index + 1} - {todo.name}
                            </p>
                        </Link>
                        <div className="buttons">
                            <button
                                className="done"
                                onClick={() => handelDoneTask(todo.id)}
                            >
                                Done
                            </button>
                            <button
                                className="delete"
                                onClick={() => handelDeleteTask(todo.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
        </>
    );
}

export default Todo;

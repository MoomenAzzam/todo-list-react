import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TodoDetails from "./pages/TodoDetails";
// useContext
export const Todos = createContext([]);
function App() {
    const [todos, setTodos] = useState([
        { id: 0, name: "react", isDone: false },
        { id: 1, name: "vue", isDone: false },
        { id: 2, name: "svelte", isDone: true },
    ]);
    const [inputTodo, setInputTodo] = useState("");
    const [selectedFilter, setSelectedFilter] = useState("all");
    const todosValue = {
        todos,
        setTodos,
        inputTodo,
        setInputTodo,
        selectedFilter,
        setSelectedFilter,
    };

    return (
        <Todos.Provider value={todosValue}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="todoDetails/:id" element={<TodoDetails />} />
                </Routes>
            </BrowserRouter>
        </Todos.Provider>
    );
}

export default App;

import "../App.css";
import Todo from "../components/Todo";
import TodoForm from "../components/TodoForm";

function Home() {
    return (
        <div className="App">
            <div className="wrapper">
                <TodoForm />
                <Todo />
            </div>
        </div>
    );
}

export default Home;

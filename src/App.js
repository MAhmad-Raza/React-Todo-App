import "./App.css";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import { useEffect, useState } from "react";
import AddTodo from "./MyComponents/AddTodo";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    setTodo(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addTodo = (title, description) => {
    let no;
    if (todos.length == 0) {
      no = 0;
    } else {
      no = todos[todos.length - 1].no + 1;
    }
    const myTodo = {
      no: no,
      title: title,
      description: description,
    };
    setTodo([...todos, myTodo]);
  };
  const [todos, setTodo] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <Header />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;

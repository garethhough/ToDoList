import React from "react";
import "./App.css";
import Form from "./components/Form";

const App = () => {
  //Variable todos will be our array
  //setTodos will be the setter function that sets the value of todos
  const [todos, setTodos] = React.useState([]);

  const [todo, setTodo] = React.useState("");

  const handleSubmit = (e) => {
    //e.preventDefault prevents the page refreshing when events fired
    e.preventDefault();

    const newTodo = {
      //Gets milli seconds and sets it as unique id
      //text sets todo text to todo hook
      //Completed set to false as it is not yet completed
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };

    //use spread operator to take todos array and make a new array
    //Concat will add new object todos array
    setTodos([...todos].concat(newTodo));
    //reset input
    setTodo("");
  };

  const deleteTodo = (id) => {
    //.filter will return a true value from an array but not a false
    const updatedtodos = [...todos].filter((todo) => todo.id !== id);

    setTodos(updatedtodos);
  };

  function toggleComplete(id) {
    const updatedtodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    setTodos(updatedtodos);
  }

  return (
    <div className="App">
      <h1>Todo List</h1>

      <Form handleSubmit={handleSubmit} setTodo={setTodo} todo={todo} todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
    </div>
  );
};

export default App;

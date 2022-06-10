const Form = ({handleSubmit, setTodo, todo, todos, deleteTodo, toggleComplete }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Onchange will set setTodo to equal input */}
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)} value={todo} />
        <button type="submit">Add</button>
        {todos.map((todo) => (
          <div key={todo.id}> 
          <div className="displayedTodos">{todo.text}</div>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <input type="checkbox" onChange={() => toggleComplete(todo.id)} checked={todo.completed} />
          </div>
        ))}
      </form>
    </div>
  );
};

export default Form;

import './scss/app.scss'
import Header from "./components/Header";
import ToDoBlock from "./components/ToDoBlock";
import dataTODOS from './components/json/data.json'
import React from 'react'
function App() {
  const [todos, setTodos] = React.useState(dataTODOS);
  const [inputValue, setInputValue] = React.useState('');

  React.useEffect(() => {
    setTodos(dataTODOS);
  }, [dataTODOS]);
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const addNewToDo = () => {
    const newTodo = {
      "id": todos.length,
      "value": inputValue
    }
    setTodos([...todos, newTodo])
    console.log(todos)
  };

  return (
  <div>
    <div className="container">
        <Header/>
      <div className="fill__block">
        <input type="text" value={inputValue} onChange={handleChange} id="todo-text" placeholder="Create a new todo..." />
        <button onClick={addNewToDo} className="fill__block-button">GO</button>
      </div>
      {todos.map(item => <ToDoBlock key={item.id} {...item}/>)}
    </div>
  </div>
  );
}

export default App;

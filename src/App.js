import './scss/app.scss'
import Header from "./components/Header";
import ToDoBlock from "./components/ToDoBlock";
import dataTODOS from './components/json/data.json'
function App() {
  return (
  <div>
    <div className="container">
        <Header/>
      <div className="fill__block">
        <input type="text" id="todo-text" placeholder="Create a new todo..." />
        <button className="fill__block-button">GO</button>
      </div>
      {dataTODOS.map(item => <ToDoBlock {...item}/>)}
    </div>
  </div>
  );
}

export default App;

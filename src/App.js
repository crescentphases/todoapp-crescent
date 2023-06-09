import './scss/app.scss'
import Header from "./components/Header";
function App() {
  return (
  <div>
    <div className="container">
        <Header/>
      <div className="fill__block">
        <input type="text" id="todo-text" placeholder="Create a new todo..." />
        <button className="fill__block-button">GO</button>
      </div>

    </div>
  </div>
  );
}

export default App;

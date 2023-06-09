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
      <div className="to__doBlock">
        <div className="to__doBlock-block">
          <button className="to__doBlock-block__icon">
            <span></span>
          </button>
          <div className="to__doBlock-block__text">
            sdagfasdfgsagsa
          </div>
        </div>

      </div>
    </div>
  </div>
  );
}

export default App;

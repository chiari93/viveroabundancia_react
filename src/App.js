import logo from './logo.svg';
import './App.css';
import Lista from "./Components/Lista";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Componente Padre</h1>
        <Lista/>
      </header>
    </div>
  );
}

export default App;

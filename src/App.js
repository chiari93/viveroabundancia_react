import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        <ItemListContainer bienvenida={'Bienvenido al vivero!'}/>
        </header>
    </div>
  );
}

export default App;

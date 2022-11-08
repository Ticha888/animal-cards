import './App.css';
import Cards from './components/cards';
import FilterButton from './components/filter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <FilterButton />
      </header>
      <Cards />
    </div>
  );
}

export default App;

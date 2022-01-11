import logo from './logo.svg';
import './App.css';
import FilterBox from './component/filterBox'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="pad">
          <FilterBox />
        </div>
        <p className="edvora">Edvora</p>
        <p className="products">Products</p>
        
      </header>
    </div>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Products from './components/Products/Products';
import NavScrollExample from './components/Products/nav'; 

function App() {
  return (
    <div className='App'>
      <div className="sticky-top">
        <NavScrollExample/>
      </div>
      <container>
        <Products/>
      </container>
    </div>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Products from './components/Products/Products';
import NavScrollExample from './components/Products/nav'

function App() {
  return (
    <div className='App'>
        <container>
          <NavScrollExample/>
          <Products/>
        </container>
    </div>
  );
}

export default App;

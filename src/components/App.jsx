import './App.css';
import NavBar from './NavBar/NavBar.jsx'
import { ItemListContainer } from './ItemListContainer/ItemListContainer.jsx'
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer.jsx'
import { Checkout } from './Checkout/Checkout.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="divGeneral" style={{color: 'blue'}}>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/product/:id' element={<ItemDetailContainer />} />     
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<h1>404 not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
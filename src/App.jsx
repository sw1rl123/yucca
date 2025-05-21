import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Components/Pages/Main/Main';
import Catalog from './Components/Pages/Catalog/Catalog';
import Product from './Components/Pages/Product/Product';
import { useEffect } from 'react';
import Cart from './Components/Pages/Cart/Cart';
import About from './Components/Pages/About/About';
import FaQ from './Components/Pages/FaQ/FaQ';
import Contacts from './Components/Pages/Contacts/Contacts';
import Warranty from './Components/Pages/Warranty/Warranty';

function App() {
  
  useEffect(() => {
    localStorage.setItem("cartCountBouquet", 0)
    localStorage.setItem("cartCountComposition", 0)
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/catalog" element={<Catalog />}/>
          <Route path="/product" element={<Product />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/faq" element={<FaQ />}/>
          <Route path="/contacts" element={<Contacts />}/>
          <Route path="/warranty" element={<Warranty />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

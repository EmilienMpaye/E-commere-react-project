import React from 'react';
import "./App.css";
import './components/navbar.css'
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import { ShopContextProvider } from './context/shop-context';
function App() {
  
  return (
    <div className="app">
   <ShopContextProvider> 
  <Router>
    <Navbar/>
    <Routes>
     < Route path="/" element={<Shop/>}/>
     <Route path="/cart" element={<Cart/>} />
    </Routes>
  </Router>
  </ShopContextProvider>
    </div>
  );
}


export default App;

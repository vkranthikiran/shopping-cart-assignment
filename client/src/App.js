import { Route, Routes } from 'react-router-dom';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import './App.scss'
import Home from './components/Home';
import Footer from './components/Footer';
import Products from './components/Products';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';
import ProductDetails from './components/ProductDetails';
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="register"  element={<Register />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path='cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
};
export default App
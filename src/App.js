
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/home/Home'
import ProductList from './components/products/ProductList'
import Cart from './components/cart/Cart'

function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
    )
}

export default App;

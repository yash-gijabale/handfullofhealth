import Header from './components/header/Header';
import './app.css'
import Home from './pages/home/Home';
import { Route, Routes } from "react-router-dom"
import ShopByBrand from './pages/shopByBrand/ShopByBrand';
import Footer from './components/footer/Footer';
import ProductDetails from './pages/productDetails/ProductDetails';
import Contact from './pages/contact/Contact';
import store from './store';
import { loadCart } from './actions/productAction';
import MyCart from './pages/myCart/MyCart';
import Checkout from './pages/checkout/Checkout';
import Layout from './components/layout/Layout';
import Login from './pages/account/Login';
import Account from './pages/account/Account';
import { loadUser } from './actions/userAction';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Dashboard from './pages/admin/dashboard/Dashboard';
import Products from './pages/admin/product/Products';


function App() {
  useEffect(() => {

    store.dispatch(loadCart())
    store.dispatch(loadUser())

  })
  // const user = useSelector(state => state.user)
  // const cart = useSelector(state => state.cartItem)
  // console.log(cart)
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ShopByBrand />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/gifting' element={<ShopByBrand />} />
          <Route path='/offers' element={<ShopByBrand />} />
          <Route path='/arrival' element={<ShopByBrand />} />
          <Route path='/corparatr' element={<ShopByBrand />} />
          <Route path='/about' element={<ShopByBrand />} />
          <Route path='/blog' element={<ShopByBrand />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/myCart' element={<MyCart />} />
          <Route path='/account' element={<Account />} />
        </Route>
      </Routes>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/admin/products' element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;

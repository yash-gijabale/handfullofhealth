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


function App() {

  store.dispatch(loadCart())
  return (
    <div className="App">
      <Header />
      <Routes>
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

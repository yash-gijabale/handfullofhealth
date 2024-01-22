import Header from './components/header/Header';
import './app.css'
import Home from './pages/home/Home';
import { Route, Routes } from "react-router-dom"
import ShopByBrand from './pages/shopByBrand/ShopByBrand';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shopByBrand' element={<ShopByBrand />} />
        <Route path='/gifting' element={<ShopByBrand />} />
        <Route path='/offers' element={<ShopByBrand />} />
        <Route path='/arrival' element={<ShopByBrand />} />
        <Route path='/corparatr' element={<ShopByBrand />} />
        <Route path='/about' element={<ShopByBrand />} />
        <Route path='/blog' element={<ShopByBrand />} />
        <Route path='/contact' element={<ShopByBrand />} />
      </Routes>
    </div>
  );
}

export default App;

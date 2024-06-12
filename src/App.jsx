
import './App.css'
import Header from './Component/Header'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './Component/Home.jsx';
import About from './Component/About.jsx';
import Product from './Component/Product.jsx';
import Detail from './Component/Detail.jsx';
import Cart from './Component/Cart.jsx';
import Wish from './Component/Wish.jsx';
import NotFound from './Component/NotFound.jsx';
import CatDetail from './Component/CatDetail.jsx';


function App() {

  


  return (
    <>

     

    <Router >
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />  {/* About route */}
        <Route path="/about" element={<About />} />  {/* About route */}
        <Route path="/product" element={<Product />} />  {/* About route */}
        <Route path="/category/:name" element={<CatDetail />} />  {/* About route */}
        <Route path="/detail/:id" element={<Detail />} />  {/* About route */}
        <Route path="/cart" element={<Cart />} />  {/* About route */}
        <Route path="/wishlist" element={<Wish />} />  {/* About route */}
        <Route path="*" element={<NotFound />} />  {/* About route */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
    </>
  )
}

export default App

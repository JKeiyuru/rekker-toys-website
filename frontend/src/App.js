
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignUp';
import Footer from './Components/Footer/Footer';
import Product from './Pages/Product';
import toys_banner from './Components/Assets/toys_banner.jpg'
import kitchenware_banner from './Components/Assets/kitchenware_banner.jpg'
import stationery_banner from './Components/Assets/stationery_banner.jpg'




function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/> 
      <Routes>
      <Route path='/' element={<Shop/>}/> 
      <Route path='/toys' element={<ShopCategory banner={toys_banner} category="toys" />}/> 
      <Route path='/kitchenware' element={<ShopCategory banner={kitchenware_banner} category="kitchenware" />}/> 
      <Route path='/stationery' element={<ShopCategory banner={stationery_banner} category="stationery" />}/> 
      <Route path="/product" element={<Product/>} >
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/> 
      <Route path='/login' element={<LoginSignup/>}/> 
      </Routes>
      <Footer/>
      </BrowserRouter>     
    </div>
  );
}

export default App;

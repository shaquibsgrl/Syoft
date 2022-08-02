
import './App.css'
import { Routes, Route } from "react-router-dom";
import { Navbar } from './Components/Navbar';
import Home from "../src/Pages/Home"
import Shoppage from './Pages/ShopPage';
import { ProductDetails } from './Pages/ProductDetails';


function App() {
  return (
    <div className="App">
      <Navbar/>
       <h3>heelo</h3>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/collection/all' element={<Shoppage/>}></Route>
        <Route path='/collection/all/:_id' element={<ProductDetails/>}></Route>
 
      </Routes>
    </div>
  )
}

export default App

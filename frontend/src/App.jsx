import React, { useContext } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import { StoreContext } from './context/StoreContext'

const App = () => {

  const {dMode}=useContext(StoreContext);

  return (
    <>
    <div className={dMode===true?"dark-mode":"app"}>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/order' element={<PlaceOrder/>}></Route>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App

import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Shop from './pages/Shop'
import Register from './pages/Register'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Home from './pages/Home'
import About from './pages/About'
const App = () => {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/home' element={<Home/>} />
            <Route path='/shop' element={<Shop/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
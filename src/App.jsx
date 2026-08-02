import { useState } from 'react'
import {Route, Routes} from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Header from './pages/Header'
import Footer from './pages/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About';

function App() {  //console.log("inApp");
  const [count, setCount] = useState(0)
  
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="" element={<Home/>}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App

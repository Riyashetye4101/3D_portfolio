import React from 'react'
import './index.css';
import {Route, BrowserRouter as Router, Routes} from
'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import Projects from './projects';
import About from './about';
const App = () => {
  return (
    <main className='bg-slate-300/20'>
            <Router>
              <Navbar/>
              <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/projects' element={<Projects/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
              </Routes>
            </Router>
    </main>
  )
}

export default App
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Navbar,Footer} from './Components/layout'
import {Home} from './Pages/Home'
import {Contact} from './Pages/Contact'
import {NotFound} from './Pages/NotFound'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Servic from './Pages/Servic';
const App=()=>{
  return(
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path ="/Servic" element={<Servic/>}/>
  <Route path="*" element={<NotFound/>}/>
  </Routes> 
  <Footer/>
  </BrowserRouter>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

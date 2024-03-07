import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Menu from "./components/menu.js";
import Home from "./components/startpage.js";
import About from "./components/aboutpage.js";
import Contact from "./components/contactpage.js";
import Products from "./components/productpage.js";
import NoPage from "./components/nopage.js";


export default function App()
{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<Home/>}/>
          <Route path="products" element={<Products/>}/>
          <Route path="about"element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
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
reportWebVitals();

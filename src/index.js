import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from './components/Layout'
import './index.css';
import reportWebVitals from './reportWebVitals';
import About from './pages/Aboutpage'
import Contact from './pages/Contactpage'
import Products from './pages/Productpage'
import Home from './pages/Home'
import OrderCake from './pages/OrderCake';
import OrderCupCakes from './pages/OrderCupCakes';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="cake" element={<OrderCake />} />
        <Route path="cupcakes" element={<OrderCupCakes />} />
        <Route path="*" element={<Home />} />
      </Routes>
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
reportWebVitals();

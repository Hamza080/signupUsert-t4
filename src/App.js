import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import LoginForm from "./LoginForm";
import Contact from "./Contact";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>

       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}>
        <Route path="/LoginForm" element={<LoginForm/>}/>
        </Route>
        <Route path="/Home" element={<Home/>}></Route>

          <Route path="contact" element={<Contact/>}></Route>
  
      </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App;

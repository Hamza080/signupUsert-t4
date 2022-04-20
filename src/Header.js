import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import './App.css';
const Header = () => {
  const { state } = useLocation();


  return (
    <>
      <nav>
        <ul> 
        <div className="sidebar">
        <li>
            <Link to="/Home">Home</Link>
          </li>          
          <li >
            <Link to="/contact">Contact</Link>
          </li>
        </div>
        <div className="login ">
        <li >
            <Link to="/LoginForm">LoginForm</Link>
          </li>
        </div>
          
        </ul>
      </nav>

      <Outlet />
      
    </>
  )
}

export default Header
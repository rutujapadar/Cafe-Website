import React from "react";
import logo from './img/logo.png';
import order from './Order';
import store from './Store';
import { Link } from "react-router-dom";
import About from "./About";
import Home from './Home';

function Header(){
    return(

  
  <div className="nav">
  <div className="container">
    <div className="title">
    <Link to="/">Home</Link>
    <Link to="/Order">Order</Link>
    <Link to="/Store">Stores</Link>
    <Link to="/About">About</Link>
  
    </div>
    <div className="mem">
    <Link to="/Addtb">
      <span class="material-symbols-outlined" id="bag">
      shopping_bag
      </span>
    </Link>
    <Link to="/Formm">
      <span class="material-symbols-outlined">
        account_circle
        </span>
    </Link>
    </div>
    <img src={logo}></img>
  
  
  </div>
  
  </div>
 

    );
}
export default Header;

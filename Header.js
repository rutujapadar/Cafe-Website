import React from "react";
import logo from './img/logo.png';
import order from './Order';
import store from './Store';
import { Link } from "react-router-dom";
import Membership from "./Membership";
import Home from './Home';

function Header(){
    return(
<div>
  
  <div className="nav">
  <div className="container">
    <div className="title">
    <Link to="/">Home</Link>
    <Link to="/Order">Order</Link>
    <Link to="/Store">Stores</Link>
    <Link to="/About">About</Link>
  
    </div>
    <div className="mem">
    <Link to="/Formm">
      <span class="material-symbols-outlined">
        account_circle
        </span>
    </Link>
  
    </div>
    <img src={logo}></img>
  
  
  </div>
  
  </div>
  <div className="nav2">
    <h5>want some benefits?try this</h5>
    <button><Link to='/Formm' style={{color:'white',textDecoration:'none',fontFamily:'kanit'}}>know more</Link></button>
  </div>
</div>

    );
}
export default Header;

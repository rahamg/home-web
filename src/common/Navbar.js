import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import React from "react";

const linkActions = [
  {
    disptext: "List of ",
    linkto: "list"
  },
  {
    disptext: "Creat ",
    linkto: "create"
  }
];
const products = [
  {
    name: "Transaction",
    color: "#f44336",
    href: "#"
  },
  {
    name: "User",
    color: "#e91e63",
    href: "#"
  },
  {
    name: "Card",
    color: "#9c27b0",
    href: "#"
  },
  {
    name: "Rent",
    color: "#673ab7",
    href: "#"
  },
  {
    name: "Transfer",
    color: "#3f51b5",
    href: "#"
  }
];

function MyNavbar() {
    return (
      <div className="menu">
        {products?.map((product, i) => {
            return (
                <div className='itemactive'>
                  <ul className="navbar-nav ms-auto">
                  {linkActions?.map((item, i) => {
                    return (
                    <li className="nav-item">
                      <Link className="nav-link" to={`/${item.linkto}${product.name}`}>
                      {item.disptext}{product.name}
                      </Link>
                    </li>);
                  })}
                  </ul>
                </div>
            );
          })}
        
     <div
       // ref="jj"
        className="indicator"
       />
      <div
       // ref="te"
        className="indicator"
       />
      
    </div>
    );
  }
  
  export default MyNavbar;
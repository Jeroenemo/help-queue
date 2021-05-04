import React from 'react';
import ticketsImage from './../img/Studio_Project.png';
import { Link } from "react-router-dom";

function Header(){
  return (
    <>
      <h1>Help Queue</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
      {/* <img src={ticketsImage} alt="An image of tickets" /> */}
    </>
  );
}

export default Header;
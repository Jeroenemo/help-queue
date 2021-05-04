import React from 'react';
import ticketsImage from './../img/Studio_Project.png';

function Header(){
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={ticketsImage} alt="An image of tickets" />
    </React.Fragment>
  );
}

export default Header;
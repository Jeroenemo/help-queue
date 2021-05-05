import React from 'react';
import ticketsImage from './../img/Studio_Project.png';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const HelpQueueHeader = styled.h1`
  font-size: 24px;
  text-align: center;
  color: white;
`;

const StyledWrapper = styled.section`
  background-color: orange;
`;

function Header(){
  return (
    <React.Fragment>
      <StyledWrapper>
        <HelpQueueHeader>
          Help Queue
        </HelpQueueHeader>

      </StyledWrapper>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Header;
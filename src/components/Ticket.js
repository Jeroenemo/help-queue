import React from 'react';
import PropTypes from 'prop-types';

function Ticket({
  location,
  names, 
  issue
}){

  return (
    <>
      <h3>3a</h3>
      <h3>{location} - {names}</h3>
      <p><em>{issue}</em></p>
      <hr />
    </>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;
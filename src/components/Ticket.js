import React from 'react';
import PropTypes from 'prop-types';

function Ticket({
  location,
  names, 
  issue,
  id,
  whenTicketClicked,
  formattedWaitTime
}){
  return (
    <>
      <div onClick = {() => whenTicketClicked(id)}>
        <h3>{location} - {names}</h3>
        <p><em>{issue}</em></p>
        <p><em>{formattedWaitTime}</em></p>
        <hr />
      </div>
    </>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string,
  id: PropTypes.string,
  whenTicketClicked: PropTypes.func
};

export default Ticket;
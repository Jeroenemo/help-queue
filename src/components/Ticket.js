import React from 'react';

function Ticket(){
  const name = "Thato";
  const name2 = "Haley";
  return (
    <React.Fragment>
      <h3>3a</h3>
      <h3>{name} and {name2}</h3>
      <p><em>Firabase entries not saving!</em></p>
      <hr/>
    </React.Fragment>
  );
}

export default Ticket;
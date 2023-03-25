import React from 'react';

const Knob = ({steps}) => {
  return (
    <div style={{border: '2px solid salmon', margin: '20px', padding:'8px'}}>
      <h5>This is Knob Component</h5>
      <p>Steps Here is: {steps} </p>
    </div>
  );
};

export default Knob;
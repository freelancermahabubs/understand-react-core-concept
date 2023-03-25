import React from 'react';
import Knob from '../Knob/Knob';

const Dial = ({steps}) => {
  return (
    <div style={{border: '2px solid purple', margin: '20px', padding:'8px'}}>
      <h3>This is Dial Component</h3>
      Your Steps Count: {steps}
      <Knob steps={steps} />
    </div>
  );
};

export default Dial;
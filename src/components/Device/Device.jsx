import React from 'react';
import DevicesDetails from '../DeviceDetails/DevicesDetails';

const Device = ({name, price}) => {
  return (
    <div>
      <h3>I have a Device: {name}</h3>
      <DevicesDetails price={price}/>
    </div>
  );
};

export default Device;
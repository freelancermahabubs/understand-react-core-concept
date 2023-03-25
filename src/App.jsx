
import React from 'react';
import Device from './components/Device/Device';
import Watch from './components/Watch/Watch';
import './App'
import Knob from './components/Knob/Knob';

const App = () => {
  return (
 
    <div className='app'>
         <Knob steps={54}/>
     <Device name={'iphone'} price={"$54212"}/>
  <Device name={'Samsung'} price={"$4212"}/>
  <Watch/>
    </div>
  );
};

export default App;

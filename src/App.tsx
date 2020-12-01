import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TextField} from "./TextField";

const App: React.FC = () => {
  return <div>
    <TextField text='hell0' personObject={{lastName: 'styles', firstName: 'hairy'}} />
  </div>
};

export default App;

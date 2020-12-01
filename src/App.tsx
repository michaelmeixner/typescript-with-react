import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './Counter';
// import {TextField} from "./TextField";

const App: React.FC = () => {
  return <div>
    {/* <TextField text='hell0' personObject={{lastName: 'styles', firstName: 'hairy'}} /> */}
    <Counter>
      {(count, setCount) => (
        <div>
          {count}
          <button onClick={() => setCount(count + 1)} >+</button>
        </div>
      )}
    </Counter>
  </div>
};

export default App;

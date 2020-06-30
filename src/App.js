import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { ADD_LAYER } from './constants/actionTypes';

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: ADD_LAYER, payload: 'layer' })}>Add Layer</button>
    </div>
  );
}

export default App;

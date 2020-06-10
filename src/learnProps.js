import React from 'react';
import './App.css';

function LearnProps(props) {
  return (
    <div className="App">
      <h1> Hello World. </h1>
      <h2> {props.learn} </h2>
    </div>
  );
}

export default LearnProps;
import React from 'react';
import './App.css';

function LearnProps(props) {
  return (
    <div className="App">
      <h1> Hello World from {props.greeting}. </h1>
      <h2> I am learning {props.learn} </h2>
      <hr />
      <h2> </h2>
    </div>
  );
}

export default LearnProps;
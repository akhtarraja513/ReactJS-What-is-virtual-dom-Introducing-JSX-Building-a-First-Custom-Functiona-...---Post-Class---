// write code for Welcome component here
import React, { Component, useState } from "react";
import '../styles/App.css';

const Welcome = (props) => {
   let hey = `Hey ! ${props.name}`;
   let greetMessage = `Welcome to Newton School.`;
  return (
    <div className="main">
      <h1>{hey}</h1>
      <h2>{greetMessage}</h2>
    </div>
  )
}


export default Welcome;

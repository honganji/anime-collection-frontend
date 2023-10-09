import React from 'react';
import "./Input.css";

export default function Input(props) {
  const title = props.propertyName[0].toUpperCase() + props.propertyName.substring(1);
  return (
    <div id='input'>
      <div className='item'>{title}</div>
      <input className='box' type='text' placeholder={`Enter your ${props.propertyName}`} name={props.propertyName} value={props.value} onChange={(e) => props.onInputChange(e)}></input>
    </div>
  );
}

import React, { useState } from 'react';
import "./Signup.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Input from '../components/parts/Input';

export default function Signup() {
  const navigator = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });
  console.log(process.env.REACT_APP_LOCALHOST_API_URL);

  const { name, email, password } = user;

  function onInputChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  async function onSubmit(e) {
    e.preventDefault();
    // await axios.post("http://localhost:8080/user", user);
    navigator("/", {
      state: {
        name: name
      }
    });
  };
  return (
    <div id='signup'>
      <form onSubmit={(e) => onSubmit(e)}>
        <Input propertyName="name" value={name} onInputChange={onInputChange} />
        <Input propertyName="email" value={email} onInputChange={onInputChange} />
        <Input propertyName="password" value={password} onInputChange={onInputChange} />
        <button type='submit' className='btn colored-btn'>Signup</button>
      </form>
    </div>
  );
}

import React, { useState } from 'react';
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import Input from '../components/parts/Input';

export default function Lonin() {
  const navigator = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

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
    <div id='login'>
      <form onSubmit={(e) => onSubmit(e)}>
        <Input propertyName="name" value={name} onInputChange={onInputChange} />
        {/* <Input propertyName="email" value={email} onInputChange={onInputChange} /> */}
        <Input propertyName="password" value={password} onInputChange={onInputChange} />
        <button type='submit' className='btn colored-btn'>Login</button>
      </form>
    </div>
  );
}

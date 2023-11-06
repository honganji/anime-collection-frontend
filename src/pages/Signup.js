import React, { useState } from 'react';
import "./Signup.css";
import { useNavigate } from 'react-router-dom';
import Input from '../components/parts/Input';
import { request, setAuthHeader } from '../helpers/axios_helpers';

export default function Signup() {
  const navigator = useNavigate();
  const [user, setUser] = useState({
    name: "",
    emailAddress: "",
    password: ""
  });

  const { name, emailAddress, password } = user;

  function onInputChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  async function onSubmit(e) {
    e.preventDefault();
    // await axios.post("http://localhost:8080/user", user);
    const result = await request(
      "POST",
      "/signup",
      user
    );
    setAuthHeader(result.data.token);
    window.localStorage.setItem('name', result.data.name);
    window.localStorage.setItem('isLogin', true);
    window.localStorage.setItem('id', result.data.id);
    navigator("/", {
      // state: {
      //   name: name
      // }
    });
  };
  return (
    <div id='signup'>
      <form onSubmit={(e) => onSubmit(e)}>
        <Input propertyName="name" value={name} onInputChange={onInputChange} />
        <Input propertyName="emailAddress" value={emailAddress} onInputChange={onInputChange} />
        <Input propertyName="password" value={password} onInputChange={onInputChange} />
        <button type='submit' className='btn colored-btn'>Signup</button>
      </form>
    </div>
  );
}

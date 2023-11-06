import React, { useState } from 'react';
import "./Signup.css";
import { useNavigate } from 'react-router-dom';
import Input from '../components/parts/Input';
import { EXPIRE_SECOND, request, setAuthHeader } from '../helpers/axios_helpers';
import Cookies from 'js-cookie';

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
    const result = await request(
      "POST",
      "/signup",
      user
    );
    setAuthHeader(result.data.token);
    var t = new Date();
    t.setSeconds(t.getSeconds() + EXPIRE_SECOND);
    Cookies.set('name', result.data.name, { expires: t });
    Cookies.set('isLogin', true, { expires: t });
    Cookies.set('id', result.data.id, { expires: t });
    navigator("/", {});
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

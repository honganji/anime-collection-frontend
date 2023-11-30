import React, { useState } from 'react';
import "./Signup.css";
import { useNavigate } from 'react-router-dom';
import { EXPIRE_SECOND, request, setAuthHeader } from '../helpers/axios_helpers';
import Cookies from 'js-cookie';
import { useForm } from "react-hook-form"

export default function Signup() {
  const navigator = useNavigate();

  // variable to set input data
  const [user, setUser] = useState({
    name: "",
    emailAddress: "",
    password: ""
  });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
  });

  const { name, emailAddress, password } = user;

  function onInputChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function onSubmit(e) {
    const result = await request(
      "POST",
      "/signup",
      {
        name: getValues("name"),
        emailAddress: getValues("email"),
        password: getValues("password")
      }
    );

    // set authentication info
    setAuthHeader(result.data.token);
    var t = new Date();
    t.setSeconds(t.getSeconds() + EXPIRE_SECOND);
    Cookies.set('name', result.data.name, { expires: t });
    Cookies.set('isLogin', true, { expires: t });
    Cookies.set('id', result.data.id, { expires: t });
    navigator("/", {});
  };

  return (
    <div id='sign-up'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input">
          <div className='item'>Name</div>
          <input
            className='box'
            {...register('name', {
              required: {
                value: true,
                message: 'You must input something',
              },
            })}
          />
        </div>
        {errors.name?.types?.required && <div className='error'>{errors.name?.types?.required}</div>}
        <div className="input">
          <div className='item'>Email Address</div>
          <input
            className='box'
            {...register('email', {
              required: {
                value: true,
                message: 'You must input something',
              },
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Please input mail address',
              },
            })}
          />
        </div>
        {errors.email?.types?.required && <div className='error'>{errors.email?.types?.required}</div>}
        {errors.email?.types?.pattern && <div className='error'>{errors.email?.types?.pattern}</div>}
        <div className="input">
          <div className='item'>Password</div>
          <input
            className='box'
            {...register('password', {
              required: {
                value: true,
                message: 'You must input something',
              },
              minLength: {
                value: 4,
                message: 'Please make the length more than 4 characters',
              },
              maxLength: {
                value: 20,
                message: 'Please make the length less than 20 characters',
              },
            })}
          />
        </div>
        {errors.password?.types?.required && <div className='error'>{errors.password?.types?.required}</div>}
        {errors.password?.types?.minLength && <div className='error'>{errors.password?.types?.minLength}</div>}
        {errors.password?.types?.maxLength && <div className='error'>{errors.password?.types?.maxLength}</div>}

        <button type='submit' className='btn colored-btn'>Signup</button>
      </form>
    </div>
  );
}

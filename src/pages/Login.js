import React, { useState } from 'react';
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import Input from '../components/parts/Input';
import { EXPIRE_SECOND, request, setAuthHeader } from '../helpers/axios_helpers';
import Cookies from 'js-cookie';
import { useForm } from "react-hook-form"

export default function Login() {
  const navigator = useNavigate();
  async function onSubmit(e) {
    const result = await request(
      "POST",
      "/login",
      {
        emailAddress: getValues("email"),
        password: getValues("password")
      }
    );

    setAuthHeader(result.data.token);

    var t = new Date();
    t.setSeconds(t.getSeconds() + EXPIRE_SECOND);
    Cookies.set('name', result.data.name, { expires: t });
    Cookies.set('isLogin', true, { expires: t });
    Cookies.set('id', result.data.id, { expires: t });
    navigator("/");
  };

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
  });
  return (
    <div id='login'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div id="input">
          <div className='item'>Email Address</div>
          <input
            className='box'
            {...register('email', {
              required: {
                value: true,
                message: '入力必須の項目',
              },
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'メールアドレスを入力してください',
              },
            })}
          />
        </div>
        {errors.email?.types?.required && <div>入力が必須の項目です</div>}
        {errors.email?.types?.pattern && <div>{errors.email?.types?.pattern}</div>}
        {console.log(errors.email?.types)}
        {console.log(getValues("email"))}

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
        {errors.password?.types?.required && <div>{errors.password?.types?.required}</div>}
        {errors.password?.types?.minLength && <div>{errors.password?.types?.minLength}</div>}
        {errors.password?.types?.maxLength && <div>{errors.password?.types?.maxLength}</div>}
        {console.log(errors.password?.types)}
        {console.log(getValues("password"))}
        <button type='submit' className='btn colored-btn'>Login</button>
      </form>
    </div>
  );
}

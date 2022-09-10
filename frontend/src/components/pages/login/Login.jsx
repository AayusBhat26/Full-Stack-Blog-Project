import './login.css'
import {Link} from 'react-router-dom';
import { useContext, useRef } from 'react';
import { Context } from '../../../context/Context';
import axios from 'axios';
export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const {
    user, dispatch, isFetching
  } = useContext(Context);


  const handleSubmit = async(e)=> {
    e.preventDefault();
    dispatch({
      type:'LOGIN_START'
    });

    try {
      const res = await axios.post('/auth/login', {
        username:userRef.current.value,
        password:passwordRef.current.value,
      })
         dispatch({
           type: "LOGIN_SUCCESS",payload:res.data
         });
    } catch (err) {
      dispatch({
        type: "LOGIN_FAILURE",
      });
    }
  }

console.log(user);



  return (
    <div className="login">
      {/* Login */}
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>username</label>
        <input type="text" placeholder="enter your username" ref={userRef} />

        <label>Password: </label>
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button className="loginButton" type="submit">
          Login
        </button>
      </form>
      <button className="loginRegisterButton">Register</button>
      <Link to="/registers"> Register</Link>
    </div>
  );
}

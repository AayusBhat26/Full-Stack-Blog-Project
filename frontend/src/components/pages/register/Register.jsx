import './register.css'
import {Link} from "react-router-dom";
export default function Login() {
  return (
    <div className="register">
      {/* Login */}
      <span className="registerTitle">Register Yourself</span>
      <form className="registerForm">
        <label>Username</label>
        <input type="username" placeholder="Create Your Username" />

        <label>Email</label>
        <input type="text" placeholder="example@example.com" />

        <label>Password</label>
        <input type="text" placeholder="Password" />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">Login</button>
      <Link to="/login"> Login</Link>
    </div>
  );
}

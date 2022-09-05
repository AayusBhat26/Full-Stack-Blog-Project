import './login.css'

export default function Login() {
  return (
    <div className="login">
      {/* Login */}
      <span className="loginTitle">Login In</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="text" placeholder="example@example.com" />

        <label>Password: </label>
        <input type="text" placeholder="Password" />
        <button className="loginButton">Login</button>
      </form>
        <button className="loginRegisterButton">Register</button>
    </div>
  );
}

import "./register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Alert, AlertIcon } from "@chakra-ui/react";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [isErrorMessageVisible, setisErrorMessageVisible] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault(); // to prevent empty reloading of the page.
    const user = {
      username,
      password,
      email,
    };
    if(user)
    try {
      const res = await axios.post("/auth/register", user);
      res.data && window.location.replace('/login');
    } catch (err) {
      setError(true);
      // console.log(err);
      
    }
  };
  return (
    <div className="register">
      {/* Login */}
      <span className="registerTitle">Register Yourself</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Create Your Username"
          onChange={(e) => setUsername(e.target.value.trim())}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="example@example.com"
          onChange={(e) => setEmail(e.target.value.trim())}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value.trim())}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>

      <button className="registerLoginButton">
        <Link to="/login" className="link">
          login
        </Link>
      </button>
      {error && <span className="errorMessage">Something went wrong</span>}
    </div>
  );
}

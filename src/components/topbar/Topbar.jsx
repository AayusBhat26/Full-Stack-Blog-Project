import "./topbar.css";
import {Link} from 'react-router-dom';

export default function Topbar() {
  const user= false;
  return (
    <div id="mainDiv">
      <div className="top">
        <div className="topLeft">
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-github"></i>
          <i class="fa-brands fa-facebook"></i>
        </div>
        <div className="topMiddle">
          <ul className="topList">
            <li className="topListItem">
              <Link to="/">Home</Link>
            </li>
            {/* <li className="topListItem">About</li> */}
            {/* <li className="topListItem">Contact</li> */}
            <li className="topListItem">
              <Link to="/write">Write</Link>
            </li>
            <li className="topListItem">{user && "LOGOUT"}</li>
          </ul>
        </div>
        <div className="topRight">
          {user ? (
            <>
              <img
                className="topImage"
                src={require("../images/Project-My-Image-temp.jpg")}
                alt="image"
              />

              <i className="fa-solid fa-folder-tree searchIcon"></i>
            </>
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link to="/register">Register</Link>
              </li>

              <li className="topListItem">
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )}
          {/* <img
            className="topImage"
            src={require("../images/Project-My-Image-temp.jpg")}
            alt="image"
          /> */}
          {/* <i class="fa-brands fa-searchengin" className="topSearchIcon"></i> */}
        </div>
      </div>
    </div>
  );
}

import './settings.css'
import Sidebar from '../../sidebar/Sidebar'  
export default function Setting() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Details</span>
          <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form className="settingsForm">
          <label>Display Picture</label>
          <div className="settingsPP">
            <img
              className="userProfileImage"
              src={require("../../images/Project-My-Image-temp.jpg")}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingPPIcon fa-thin fa-user"></i>
            </label>
            <input type="file" id="fileInput" />
          </div>
          {/* username */}
          <label> Username: </label>
          <input type="text" placeholder="Aayush" />
          {/* email */}
          <label> Email: </label>
          <input type="email" placeholder="aayush@example.com" />

          {/* password */}
          <label> Password: </label>
          <input type="password" />
          <button className="settingsButton">Update</button>
        </form>
      </div>

      <Sidebar />
    </div>
  );
}

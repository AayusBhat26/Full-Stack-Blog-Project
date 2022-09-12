import './settings.css'
import Sidebar from '../../sidebar/Sidebar'  
import { useContext, useState } from 'react';
import { Context } from '../../../context/Context';
import axios from 'axios';

export default function Setting() {
  const {user} = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);


  const handleSettingsSubmit = async (e) => {
    e.preventDefault();

    const updatedUser = {
      userId: user._id,
      username,email,password 
    };
    if (file) {
      // const data = FormData();// new operator nhi use kra
      const data = new FormData();

      // having the error that file with same name is uplioading
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);

      updatedUser.profilePic = filename;

      try {
        await axios.post("/upload", data);
      } catch (error) {
        // if error occurs a new component would be displayed here.
      }
    }
    try {
      const res = await axios.put("/users/"+user._id, updatedUser);
      // window.location.replace("/post/" + res.data.id);
        setSuccess(true);


    } catch (error) {
      // if error occurs a new component would be displayed here.
    }
  };
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Details</span>
          <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSettingsSubmit}>
          <label>Display Picture</label>
          <div className="settingsPP">
            <img className="userProfileImage" src={file ? URL.createObjectURL(file): user.profilePic} alt="" />
            <label htmlFor="fileInput">
              {/* <i className="settingPPIcon fa-thin fa-user"></i> */}
              <i className="fileIcon fa-solid fa-file"></i>
            </label>
            <input
              className="fileInput"
              type="file"
              // id="fileInput"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          {/* username */}
          <label> Username: </label>
          <input
            className="inputDetailsUpdate"
            type="text"
            placeholder={user.username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          {/* email */}
          <label> Email: </label>
          <input
            className="inputDetailsUpdate"
            type="email"
            placeholder={user.email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          {/* password */}
          <label> Password: </label>
          <input
            className="inputDetailsUpdate"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="settingsButton" type="submit">
            Update
          </button>
          {success && (
            <span className="successMessage">Profile Has been Updated</span>
          )}
        </form>
      </div>

      <Sidebar />
    </div>
  );
}

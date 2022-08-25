import "./topbar.css";


export default function Topbar() {
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
            <li className="topListItem">Home</li>
            <li className="topListItem">About</li>
            <li className="topListItem">Contact</li>
            <li className="topListItem">Write</li>
            <li className="topListItem">LogOut</li>
          </ul>
        </div>
        <div className="topRight">
          <img
            className="topImage"
            src={require("../images/Project-My-Image-temp.jpg")}
            alt="image"
          />
          {/* <i class="fa-brands fa-searchengin" className="topSearchIcon"></i> */}
          <i class="fa-solid fa-folder-tree"></i>
        </div>
      </div>
    </div>
  );
}

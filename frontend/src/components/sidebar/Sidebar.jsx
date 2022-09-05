import './sidebar.css'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <div className="myImage">
          <img
            src={require("../images/Project-My-Image-temp.jpg")}
            alt=""
            className="MyImage"
          />
        </div>
        <span className="sideBarTitle Name">Aayush</span>
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      {/* <div className="sidebarItem">
        <span className="sideBarTitle">Categories</span>
        <ul className="sideBarList">
          <li className="sideBarListItem">JavaScript</li>
          <li className="sideBarListItem">Wallpapers</li>
          <li className="sideBarListItem">Tech</li>
        </ul>
      </div> */}
      <div className="sideBarItem socials">
        <span className="sideBarTitle">Follow My Socials</span>
        <div className="sideBarSocials">
          <i className="sideBarIcons fa-brands fa-instagram"></i>
          <i className="sideBarIcons fa-brands fa-linkedin"></i>
          <i className="sideBarIcons fa-brands fa-github"></i>
          <i className="sideBarIcons fa-brands fa-facebook"></i>
        </div>
      </div>
    </div>
  );
}

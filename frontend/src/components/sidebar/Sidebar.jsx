import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import './sidebar.css'

export default function Sidebar() {
  const [cates, setCates ] = useState([]);

  useEffect(()=>{
    const getCategory = async ()=>{
      const resultantCategories = await axios.get('/categories');
      setCates(resultantCategories.data);
    }
    getCategory();
  }, []);
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
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="sidebarItem">
        <br />
        <br />
        <hr />
        <br />
        <span className="sideBarTitle">Categories</span>
        <ul className="sideBarList">
          {/* <li>hi</li> */}
          {cates.map((eachCategory) => {
            <li className="sideBarListItem">{
              console.log(eachCategory.name)
            }</li>;
          })}
        </ul>
      </div>
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

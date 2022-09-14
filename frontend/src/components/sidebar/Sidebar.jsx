import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'
import { useContext } from 'react';
import { Context } from '../../context/Context';
export default function Sidebar() {
  const [cates, setCates ] = useState([]);

  const {user} = useContext(Context);

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
        {/* <div className="myImage">
          <img
            src={
              (user.profilePic) ? (user.profilePic): (user.username) 
            }
            alt=""
            className="MyImage"
          />
        </div> */}
        <span className="sideBarTitle Name">{
          user.username
        }</span>
      </div>
      <div className="sidebarItem">
        <br />
        <br />
        <hr />
        <br />
        <span className="sideBarTitle">Categories</span>
        <ul className="sideBarList">
          {cates.map((eachCategory) => {
            return <Link className='categoryLinks' to={`/?cate=${eachCategory.name}`}> <li className="sideBarListItem">{
            eachCategory.name
          //  console.log(eachCategory.name)
           }</li>
          </Link>
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

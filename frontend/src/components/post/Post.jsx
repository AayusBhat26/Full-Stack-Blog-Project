// import { useState } from "react";
import { Link } from "react-router-dom";

import "./post.css";

export default function Post({singlePostDetails}) {
  // let [date, setDate] = useState("");
  return (
    <div className="post">
      {/* {postDetails.photo && (
        )} */}
      <img
        src={require("../images/javascript.png")}
        alt=""
        className="MyImage"
      />
      {/* <Toolkit /> */}

      {/* <div className="postInfo" data-tooltip="JavaScript - Tutorial">
        <hr />
      </div> */}
      <div className="description">
        <div className="postCategories">
          {/* {postDetails.categories.map((eachCat) => {
            return <span className="postCat">{eachCat.name}</span>;
          })} */}
        </div>
        {/* <Link to={`/post/${postDetails._id}`} className="link"> */}
        {/* <span className="postTitle">{postDetails.title}</span> */}
        <span className="postTitle">{singlePostDetails.title}</span>
        {/* </Link> */}
        {/* <p className="time">{new Date(postDetails.createdAt).toDateString()}</p> */}
        <p className="time">{new Date(singlePostDetails.createdAt).toDateString()}</p>
        <p className="usernamePostDetails">{
          singlePostDetails.username
}</p>
        <p className="desPara">
          {
            singlePostDetails.desc
          }
        </p>
      </div>
    </div>
  );
}

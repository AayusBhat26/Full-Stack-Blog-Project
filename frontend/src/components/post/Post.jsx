// import { useState } from "react";
import { Link } from "react-router-dom";

import "./post.css";

export default function Post({singlePostDetails}) {
  const publicFolder = "http://localhost:5000/images/";
  // let [date, setDate] = useState("");
  return (
    <div className="post">
      {singlePostDetails.photo && (
        <img
          src={publicFolder + singlePostDetails.photo}
          alt=""
          className="MyImage"
        />
      )}

      {/* <Toolkit /> */}

      {/* <div className="postInfo" data-tooltip="JavaScript - Tutorial">
        <hr />
      </div> */}
      <div className="description">
        <div className="postCategories">
          {singlePostDetails.categories.map((eachCat) => {
            <span className="postCat">{eachCat.name}</span>;
          })}
        </div>
        <Link to={`/post/${singlePostDetails._id}`} className="linkClass" singlePost={singlePostDetails}>
          <span className="postTitle">{singlePostDetails.title}</span>
        </Link>

        {/* <Link to={`/post/${singlePostDetails._id}`} className="link">
          {/* <p className="time">{new Date(postDetails.createdAt).toDateString()}</p> */}
        {/* <Link to={`/post/${singlePostDetails._id}`} className="linkClass"> */}
        {/* <span className="postTitle">{singlePostDetails.title}</span> */}
        {/* </Link> */}
        <p className="time">
          {new Date(singlePostDetails.createdAt).toDateString()}
        </p>
        <Link to={`/?user=${singlePostDetails.username}`}>
          {/* <b>{post.username}</b> */}
          <p className="usernamePostDetails userNamePost">
            {singlePostDetails.username}
          </p>
        </Link>

        <p className="desPara">{singlePostDetails.desc}</p>
      </div>
    </div>
  );
}

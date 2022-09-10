import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import posts from "../posts/Posts";
import "./singlepost.css";
export default function SinglePost() {
  const location = useLocation();

  const pathId = location.pathname.split("/")[2];

  const [post, setPost] = useState({});
  useEffect(() => {
    const fetchPost = async () => {
      // fetching the post which was clicked by the user.
      const resultantPost = await axios.get("/posts/"+pathId);
      // const resultantPost = await axios.get(`/posts/${pathId}`);
      // console.log(resultantPost.data.post.title)
      setPost(resultantPost.data.post);
    };;
    fetchPost();
  }, [pathId]);
  return (
    <div className="singlepost">
      <div className="singlePostWrapper">
        <h1 className="singlePostTitle">
          {
            // console.log(post.title)
            post.title
          }
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-trash"></i>
            <i className="singlePostIcon fa-light fa-pen-to-square"></i>
            {/* <FontAwesomeIcon icon="fa-solid fa-pen-to-square" /> */}
          </div>
        </h1>
        {post.photo && (
          <img src={post.photo} alt="" className="singlePostImg" />
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <Link to={`/?user=${post.username}`}> 
            <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            Date: <b>{new Date(post.createdAt).toDateString()}</b>
          </span>
        </div>
        <p className="singlePostDetails">{post.desc}</p>
      </div>
    </div>
  );
}


// http://localhost:3000/posts/?user=Aayush%20Bhat
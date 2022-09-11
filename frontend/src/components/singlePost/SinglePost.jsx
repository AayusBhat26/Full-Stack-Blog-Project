import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import posts from "../posts/Posts";
import "./singlepost.css";

import { Context } from "../../context/Context";
import { useContext } from "react";
export default function SinglePost() {
  const location = useLocation();

  const pathId = location.pathname.split("/")[2];

  const [post, setPost] = useState({});


  const {user}=useContext(Context)

  const publicFolder = "http://localhost:5000/images/";


  // in order to edit the post.
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      // fetching the post which was clicked by the user.
      const resultantPost = await axios.get("/posts/" + pathId);
      // const resultantPost = await axios.get(`/posts/${pathId}`);
      // console.log(resultantPost.data.post.title)
      setPost(resultantPost.data.post);
      setTitle(resultantPost.data.title);
      setDesc(resultantPost.data.desc);
    };
    fetchPost();
  }, [pathId]);

// deleting the post

  const handleClickDelete = async()=>{
    try{
      // forgot to add the username
      // await axios.delete("posts/" + pathId);

      await axios.delete(`/posts/${post._id}`  ,{ data:{
        username: user.username
      }});

      window.location.replace("/");
    }catch(err){
      // one error componet to display the error message
    }
  }
// updating the post
  const handleSinglePostUpdate = async()=>{
    try {

      await axios.put(`/posts/${post._id}`, {
        
          username: user.username,
          title, // same name.
          desc
        },
      );

      setUpdateMode(false)
      window.location.reload();

    } catch (err) {
      // one error componet to display the error message
    }
  }
  return (
    <div className="singlepost">
      <div className="singlePostWrapper">
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus={true}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        ) : (
          <h1 className="singlePostTitle">
            {
              // console.log(post.title)
              post.title
            }
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon fa-solid fa-trash"
                  onClick={handleClickDelete}
                ></i>
                {/* <i className="singlePostIcon fa-pen-to-square"></i> */}
                {/* <FontAwesomeIcon icon="fa-solid fa-pen-to-square" /> */}
                <i
                  className="singlePostIcon fa-sharp fa-solid fa-pen-to-square"
                  onClick={() => {
                    setUpdateMode(true);
                  }}
                ></i>
              </div>
            )}
          </h1>
        )}

        {post.photo && (
          <img
            src={publicFolder + post.photo}
            alt=""
            className="singlePostImg"
          />
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:{" "}
            <Link to={`/?user=${post.username}`}>
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            Date: <b>{new Date(post.createdAt).toDateString()}</b>
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDetailsInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDetails">{post.desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleSinglePostUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}

// http://localhost:3000/posts/?user=Aayush%20Bhat

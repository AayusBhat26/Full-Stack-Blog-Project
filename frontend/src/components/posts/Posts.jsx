import Post from "../post/Post";
import Sidebar from "../sidebar/Sidebar";
import "./posts.css";
export default function posts({posts}) {
  return (
    <div className="posts">
      {
        posts.map((singlePostDetails)=>{
          // console.log("hi", singlePostDetails);
          return <Post singlePostDetails = {singlePostDetails}/>
        })
      }
      {/* <Sidebar /> */}
    </div>
  );
}

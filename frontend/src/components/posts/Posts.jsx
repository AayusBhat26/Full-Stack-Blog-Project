import Post from "../post/Post";
import Sidebar from "../sidebar/Sidebar";
import "./posts.css";
// // console.log(posts.length)
        // Object.keys(posts).forEach(function (key, index) {
        //   <Post />
        //   console.log('hi');
        // })
export default function posts({ posts }) {
  return (
    <div className="posts">
            {/* <Post / > */}
              {
                posts.map((singlePostProp)=>{
                  // console.log(p)
                  return <Post postDetails = {singlePostProp}/>
                })
              }
        {/* <Sidebar /> */}
    </div>
  );
}

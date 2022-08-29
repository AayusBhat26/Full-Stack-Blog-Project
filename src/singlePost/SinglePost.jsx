import './singlepost.css'
export default function SinglePost() { 
  return (
    <div className="singlePost">
      <div className="singlePostWrapperDiv">
        <img
          src={require("../components/images/javascript.png")}
          alt=""
          className="singlePostImage"
        />
        <h1 className="singlePostTitle">
          JavaScript - 1, Single Page
        </h1>
      </div>
      <div className="postData">
        <p className="postDataPara">
          Hi my name is aayush kumar testing string, this string is to test whether 
        </p>
      </div>
    </div>
  );
}

import "./post.css";

export default function Post() {
  return (
    <div className="post">
      {/* <Toolkit /> */}
      <img
        src={require("../images/javascript.png")}
        alt=""
        className="MyImage"
      />
      <div className="postInfo" data-tooltip="JavaScript - Tutorial">
        <span className="postTitle">JavaScript</span>
        <hr />
      </div>
      <div className="description">
            <p className="time">1 Hour Ago</p>
            <p className="desPara">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, earum nobis. Distinctio error, asperiores ab ratione ullam libero, sapiente quis in culpa deleniti enim? Placeat, corporis? Odio beatae quos perspiciatis.
            </p>
      </div>
    </div>
  );
}

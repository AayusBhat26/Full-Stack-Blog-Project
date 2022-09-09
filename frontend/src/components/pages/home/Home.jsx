import "./home.css";
import Header from "../../header/Header";
// import Header from "../../posts/Posts";
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await axios.get("/posts");
      // console.log(result);
      setPosts(result.data);
    };
    fetchPosts();
  },[]);

  // using the empty array means, use the useEffect hook just at the beginning
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts = {posts}/>
        <Sidebar / >
      </div>
    </>
  );
}

import "./home.css";
import Header from "../../header/Header";
// import Header from "../../posts/Posts";
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();
  console.log(search);

  useEffect(()=>{
    const fetchPosts = async()=>{
      const res = await axios.get('/posts'+search);
      setPosts(res.data);
    }
    fetchPosts();
  }, [search])
  // using the empty array means, use the useEffect hook just at the beginning
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts = {posts}/>
        {/* <Posts / > */}
        {/* <Posts></Posts> */}
        <Sidebar / >

      </div>
    </>
  );
}

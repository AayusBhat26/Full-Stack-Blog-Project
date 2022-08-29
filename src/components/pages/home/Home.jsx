import './home.css'
import Header from '../../header/Header'
// import Header from "../../posts/Posts";
import Posts from '../../posts/Posts'
import Sidebar from "../../sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
            <Posts / >
                  <Sidebar></Sidebar>
      </div>
    </>
  );
}

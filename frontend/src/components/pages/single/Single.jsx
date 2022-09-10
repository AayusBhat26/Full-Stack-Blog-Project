// import SinglePost from '../../../singlePost/SinglePost'
// import SidebarPost from '../../sidebarpost/SidebarPost'
import Sidebar from '../../sidebar/Sidebar'
import SinglePost from '../../singlePost/SinglePost';
import './single.css'
export default function Single() {
  return (
    <>
      <div className="single">
        {/* single */}
        <SinglePost />
        {/* <Sidebar /> */}
        {/* <Post></Post> */}
      </div>
    </>
  );
}

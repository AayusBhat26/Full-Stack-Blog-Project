import SinglePost from '../../../singlePost/SinglePost'
import SidebarPost from '../../sidebarpost/SidebarPost'
import './single.css'
export default function Single() {
  return (
    <>
      <div className="single">
        {/* single */}
        <SinglePost />
        <SidebarPost />
      </div>
    </>
  );
}

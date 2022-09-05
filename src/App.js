import {
  BrowserRouter, 
  Routes, Route, Link
} from 'react-router-dom'
import Home from "./components/pages/home/Home";
import Single from "./components/pages/single/Single";
import Topbar from "./components/topbar/Topbar";
import Write from "./components/pages/write/Write";
import Settings from "./components/pages/setting/Settings";
import Login from "./components/pages/login/Login";
// import 'font-awesome/css/font-awesome.min.css';
import Register from './components/pages/register/Register.jsx';
function App() {
  // console.log('hi');
  const user = false;
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={user ? <Home/> :<Register />} />
        <Route path="/write" element={user ? <Write /> :<Register/>} />
        <Route path="/settings" element={user ?<Settings /> :<Register/>}/>
        <Route path="/post/:postId" element={<Single />} />
        {/* <Route path="/about" component={About} /> */}
      </Routes>
      {/* <Single /> */}
      {/* <Write /> */}
      {/* <Settings /> */}
      {/* <Home/> */}
      {/* <Login/> */}

      {/* <Register/> */}
    </BrowserRouter>
  );
}

export default App;

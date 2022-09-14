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
import {
  ChakraProvider 
}
from '@chakra-ui/react'
import { useContext } from 'react';
import { Context } from './context/Context';
function App() {
  // console.log('hi');
  // const user = false;
  const {user} = useContext(Context);
  return (
    // <ChakraProvider>
    <BrowserRouter>
      <Topbar />
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route
          exact
          path="/register"
          element={user ? <Home /> : <Register />}
        />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/write" element={user ? <Write /> : <Register />} />
        <Route
          exact
          path="/settings"
          element={user ? <Settings /> : <Register />}
        />
        <Route exact path="/post/:postId" element={<Single />} />
      </Routes>
      {/* <Route path="/about" component={About} />
      {/* <Single /> */}
      {/* <Write /> */}
      {/* <Settings /> */}
      <Home />
      {/* <Login/> */}
      {/* </ChakraProvider> */}
      {/* <Register/> */}
    </BrowserRouter>
  );
}

export default App;

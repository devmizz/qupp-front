import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Head from "./views/layout/Head";
import Post from "./views/posts/Post";
import Posts from "./views/posts/Posts";

import Login from "./views/user/Login";
import SignUp from "./views/user/SignUp";
import MyPage from "./views/user/MyPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Head />
        <Routes>
          <Route path="/" element={<Posts />}></Route>
          <Route path="/post/*" element={<Post />}></Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/create_account" element={<SignUp />}></Route>
          <Route path="/my_page" element={<MyPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Head from './views/layout/Head';
import Post from './views/posts/Post';
import Posts from './views/posts/Posts';
import Question from './views/posts/Question';
import Answer from './views/posts/Answer';
import UpdatePost from './views/posts/UpdatePost';

import Login from './views/user/Login';
import Logout from './views/user/Logout';
import SignUp from './views/user/SignUp';
import MyPage from './views/user/MyPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Head />
        <Routes>
          <Route path="/" element={<Posts />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/post/:id" element={<Post />}></Route>
          <Route path="/question" element={<Question />}></Route>
          <Route path="/question/:id" element={<Question />}></Route>
          <Route path="/post/:id/answer" element={<Answer />}></Route>
          <Route path="/post/:qid/answer/:aid" element={<Answer />}></Route>
          <Route path="/update_post" element={<UpdatePost />}></Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/create_account" element={<SignUp />}></Route>
          <Route path="/my_page" element={<MyPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

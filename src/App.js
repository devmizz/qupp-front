import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { SET } from './constants/types';

import Header from './views/layout/Header';
import Footer from './views/layout/Footer';
import Post from './views/posts/Post';
import Posts from './views/posts/Posts';
import Question from './views/posts/Question';
import Answer from './views/posts/Answer';
import UpdatePost from './views/posts/UpdatePost';

import Login from './views/user/Login';
import SignUp from './views/user/SignUp';
import MyPage from './views/user/MyPage';
import GlobalStyle from './components/style/GlobalStyle';

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    dispatch({
      type: SET,
      payload: user,
    });
  }
  return (
    <div className="App h-full w-full">
      {/* <GlobalStyle /> */}
      <BrowserRouter>
        <div id="wrapper" className="flex flex-col h-screen">
          <Header />
          <div id="main-content" className="flex-1">
            <Routes>
              <Route path="/" element={<Posts />}></Route>
              <Route path="/posts" element={<Posts />}></Route>
              <Route path="/post/:id" element={<Post />}></Route>
              <Route path="/question" element={<Question />}></Route>
              <Route path="/post/:id/answer" element={<Answer />}></Route>
              <Route path="/post/:qid/answer/:aid" element={<Answer />}></Route>
              <Route path="/update_post" element={<UpdatePost />}></Route>

              <Route path="/login" element={<Login />}></Route>
              <Route path="/create_account" element={<SignUp />}></Route>
              <Route path="/my_page" element={<MyPage />}></Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

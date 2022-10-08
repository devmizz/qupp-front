import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { postQuestion } from '../../util/axios/post/questionApi';

function UpdatePost() {
  const navigate = useNavigate();

  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');
  const [college, setCollege] = useState('Humanities');

  const handleMessageChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleCollegeChange = (e) => {
    e.preventDefault();
    setCollege(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let body = {
      author: JSON.parse(localStorage.getItem('userNickname')),
      college: college,
      dept: college,
      title: title,
      content: message,
    };

    const res = apiCall(body);

    console.log(res.status);
    navigate('/');
  };

  async function apiCall(body) {
    const res = await postQuestion(body);

    return res;
  }

  return (
    <div className="max-w-2xl mx-auto mt-3">
      <div className="text-slate-700 text-[32px] font-bold">질문하기</div>

      <form onSubmit={submitHandler}>
        <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
          <div className="flex justify-between items-center py-2 px-3 border-b dark:border-gray-600">
            <div className="flex flex-wrap items-center w-6/12 divide-gray-200 dark:divide-gray-600 text-slate-50 text-[20px] font-bold">
              <div className="flex w-3/12 items-center">제목</div>
              <div className="w-9/12">
                <input
                  className="flex items-center text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 pl-3 text-sm border-gray-300 rounded border"
                  placeholder="질문의 제목을 입력해주세요"
                  value={title}
                  onChange={handleTitleChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap items-center w-3/12">
              카테고리 &nbsp;
              <select
                id="countries"
                className="w-6/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={handleCollegeChange}
                value={college}
              >
                <option defaultValue="Humanities" value="Humanities">
                  인문
                </option>
                <option value="SocialScience">사회</option>
                <option value="Business">상경</option>
                <option value="NaturalScience">자연과학</option>
                <option value="Engineering">공학</option>
                <option value="Art">예술</option>
              </select>
            </div>
          </div>
          <div className="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800">
            <label htmlFor="editor" className="sr-only"></label>
            <textarea
              id="editor"
              rows="8"
              className="block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:placeholder-gray-400"
              placeholder="질문을 입력해주세요"
              required
              value={message}
              onChange={handleMessageChange}
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
        >
          등록하기
        </button>
      </form>
    </div>
  );
}

export default UpdatePost;

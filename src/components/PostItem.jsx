import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

import Comments from './Comments';
import { deleteQuestion } from '../util/axios/post/questionApi';
import { deleteAnswer } from '../util/axios/post/answerApi';

function PostItem({ item, onSubmit }) {
  const {
    id,
    category, // optional
    registerTime,
    updateTime,
    title, // optional
    content,
    user,
    comments,
  } = item;

  const location = useLocation();

  const [inputValue, setInputValue] = useState('');

  const handleInputValueChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(id, inputValue);
    setInputValue('');
  };

  const onPostDeleteClick = async (id) => {
    var qa = 'answer';
    var url = location.pathname;
    let res;
    if (title) {
      qa = 'question';
      url = '/';
      res = await deleteQuestion(id);
    } else {
      res = await deleteAnswer(id);
    }

    if (res.status === 204) {
      window.location.replace(url);
    }
  };

  return (
    <div className="flex flex-col mt-10 w-full">
      <div className="rounded-xl border p-5 shadow-xl w-full bg-white">
        <div className="flex w-full items-center justify-between border-b pb-3">
          <div className="flex items-center space-x-3">
            <div className="text-lg font-bold text-slate-700"></div>
            {/* 이름 */}
            <div className="text-lg font-bold text-slate-700">
              {user.nickname}
            </div>
          </div>

          <div className="flex items-center space-x-8">
            {category && (
              <div className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold">
                {category}
              </div>
            )}
            {/* 등록 시간 */}
            <div className="text-xs text-neutral-500">등록시간</div>
            <div className="text-xs text-neutral-500">{registerTime}</div>
            {/* 수정 시간 */}
            <div className="text-xs text-neutral-500">수정시간</div>
            <div className="text-xs text-neutral-500">{updateTime}</div>
          </div>
        </div>

        <div className="mt-4 mb-6">
          <div className="flex justify-between">
            {title && (
              <div className="mb-3 text-xl font-bold">[질문] {title}</div>
            )}
            <div></div>
            {user.nickname ===
              JSON.parse(localStorage.getItem('userNickname')) && (
              <div className="inline-block float-right justify-between">
                {title && (
                  <Link
                    to={{
                      pathname: `/question/${id}`,
                    }}
                    className="no-underline text-black"
                  >
                    수정
                  </Link>
                )}

                {!title && (
                  <Link
                    to={{
                      pathname: `/post/${location.pathname.replace(
                        '/post/',
                        ''
                      )}/answer/${id}`,
                    }}
                    className="no-underline text-black"
                  >
                    수정
                  </Link>
                )}

                <button className="mx-2" onClick={() => onPostDeleteClick(id)}>
                  삭제
                </button>
              </div>
            )}
          </div>
          {/* 내용 */}
          <div className="text-sm text-neutral-600">
            <pre>{content}</pre>
          </div>
        </div>
      </div>

      {comments.length > 0 && (
        <div className="w-full items-center place-content-center mt-3">
          <Comments comments={comments} />
        </div>
      )}

      <div className="flex align-center w-full">
        <form onSubmit={handleSubmit} className="flex align-center w-full">
          <div className="flex w-full gap-4 flex-1 mt-6 mb-6 align-center justify-between">
            <input
              type="reply"
              className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-slate-500 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="댓글을 남겨주세요"
              value={inputValue}
              onChange={handleInputValueChange}
              required
            />
            <button
              type="submit"
              className="align-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              댓글 남기기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostItem;

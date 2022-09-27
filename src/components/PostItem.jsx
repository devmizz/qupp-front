import { useState } from 'react';
import Comments from './Comments';

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
  const [inputValue, setInputValue] = useState('');

  const handleInputValueChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(id, inputValue);
    setInputValue('');
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
          {title && <div className="mb-3 text-xl font-bold">{title}</div>}
          {/* 내용 */}
          <div className="text-sm text-neutral-600">{content}</div>
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
              className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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

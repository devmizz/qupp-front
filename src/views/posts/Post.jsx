import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { getPost, postQuestionReply } from "../../util/axios"

import { getReply } from "./Reply"

function Post() {

  const { id } = useParams();

  const [post, setPost] = useState({
    question: {
      comments: []
    },
    answers: []
  });

  const [reply, setReply] = useState('');

  const handleReplyChange = (e) => {
    e.preventDefault();
    setReply(e.target.value);
  }

  const getPostData = async () => {
    getPost(id).then(r => setPost(r));
  }

  const questionReplySubmitHandler = (e) => {
    e.preventDefault();

    let body = {
      author: JSON.parse(localStorage.getItem('userNickname')),
      comment: reply
    }

    postQuestionReply(post.question.id, body);

    setReply("");
  }

  useEffect(() => {
    getPostData();
  }, [post]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-10">
        {/* 질문 */}
        {Object.keys(post.question).length > 0 && (
          <div className="rounded-xl border p-5 shadow-xl w-9/12 bg-white">
            <div className="flex w-full items-center justify-between border-b pb-3">
              <div className="flex items-center space-x-3">
                <div className="text-lg font-bold text-slate-700"></div>
                {/* 이름 */}
                <div className="text-lg font-bold text-slate-700">
                  {post.question?.user?.nickname}
                </div>
              </div>

              <div className="flex items-center space-x-8">
                {/* 카테고리 */}
                <div className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold">
                  {post.question?.category}
                </div>
                {/* 등록 시간 */}
                <div className="text-xs text-neutral-500">등록시간</div>
                <div className="text-xs text-neutral-500">
                  {post.question?.registerTime}
                </div>
                {/* 수정 시간 */}
                <div className="text-xs text-neutral-500">수정시간</div>
                <div className="text-xs text-neutral-500">
                  {post.question?.updateTime}
                </div>
              </div>
            </div>

            <div className="mt-4 mb-6">
              {/* 제목 */}
              <div className="mb-3 text-xl font-bold">[질문] {post.question?.title}</div>
              {/* 내용 */}
              <div className="text-sm text-neutral-600">{post.question?.content}</div>
            </div>
          </div>
        )}
        <div className="mt-3 w-full">
          {getReply(post.question.comments)}
        </div>

        <div className="flex align-center justify-center w-full">
          <form 
            onSubmit={questionReplySubmitHandler} 
            className="flex w-10/12 align-center justify-center"
          >
            <div className="flex fex-between mb-6 w-full align-center justify-center">
              <input 
                type="reply"
                className="w-9/12 mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="댓글을 남겨주세요" 
                value = { reply }
                onChange = { handleReplyChange }
                required
              />
              <button 
                type="submit" 
                className="w-3/12 align-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                댓글 남기기
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex">
        <div className="flex w-9/12"></div>
        <div className="flex rounded-2xl border bg-neutral-100 w-28 text-xs font-semibold mt-2 items-center justify-center hover:bg-slate-400">
            <Link 
              className="items-center py-3 text-black no-underline hover:underline" 
              to={`/post/${id}/answer`}
            >
              답변 남기기
            </Link>
        </div>
      </div>
      
      {/* 답변 */}
      {post.answers.map((ans) => (
        <div key={ans.id} className="flex flex-col items-center justify-center mt-10">
          <div className="rounded-xl border p-5 shadow-xl w-9/12 bg-white">
            <div className="flex w-full items-center justify-between border-b pb-3">
              <div className="flex items-center space-x-3">
                <div className="text-lg font-bold text-slate-700"></div>
                {/* 이름 */}
                <div className="text-lg font-bold text-slate-700">
                  {ans.user.nickname}
                </div>
              </div>

              <div className="flex items-center space-x-8">
                {/* 등록 시간 */}
                <div className="text-xs text-neutral-500">등록시간</div>
                <div className="text-xs text-neutral-500">{ans.registerTime}</div>
                {/* 수정 시간 */}
                <div className="text-xs text-neutral-500">수정시간</div>
                <div className="text-xs text-neutral-500">{ans.updateTime}</div>
              </div>
            </div>

            <div className="mt-4 mb-6">
              <div className="mb-3 text-xl font-bold">[답변]</div>
              {/* 내용 */}
              <div className="text-sm text-neutral-600">{ans.content}</div>
            </div>
          </div>
          <div className="w-full items-center place-content-center mt-3">
            {getReply(ans.comments)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Post;

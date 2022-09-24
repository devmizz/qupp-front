import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { getPost } from "../../util/axios"

function Post() {
  const { id } = useParams();

  const [post, setPosts] = useState({
    question: {},
    answers: []
  });

  const getPostData = async () => {
    const postData = await getPost(id);

    if(postData) {
      setPosts(postData);
    }
  }

  useEffect(() => {
    getPostData();
  }, );

  return (
    <div>
      <div className="flex items-center justify-center mt-10">
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
      </div>

      <div className="flex">
        <div className="flex w-9/12"></div>
        <div className="flex rounded-2xl border bg-neutral-100 w-28 text-xs font-semibold mt-2 items-center justify-center hover:bg-slate-400">
            <Link className="items-center py-3 text-black no-underline hover:underline" to={`/post/${id}/answer`}>답변 남기기</Link>
        </div>
      </div>
      
      {post.answers.map((ans) => (
        <div key={ans.id} className="flex items-center justify-center mt-10">
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
        </div>
      ))}
    </div>
  );
}

export default Post;

import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function Post() {
  const { id } = useParams();

  const [post, setPosts] = useState([]);

  const getPosts = () => {
    axios
      .get(
        `http://ec2-3-37-201-15.ap-northeast-2.compute.amazonaws.com:8080/question/${id}`
      )
      .then((res) => {
        setPosts(res.data);
      });
  };

  useEffect(getPosts, [id]);

  console.log(post);

  return (
    <div>
      <div class="flex items-center justify-center mt-10">
        <div class="rounded-xl border p-5 shadow-xl w-9/12 bg-white">
          <div class="flex w-full items-center justify-between border-b pb-3">
            <div class="flex items-center space-x-3">
              <div class="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div>
              {/* 이름 */}
              <div class="text-lg font-bold text-slate-700">
                {post.question.user.nickname}
              </div>
            </div>

            <div class="flex items-center space-x-8">
              {/* 카테고리 */}
              <div class="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold">
                {post.question.category}
              </div>
              {/* 등록 시간 */}
              <div class="text-xs text-neutral-500">등록시간</div>
              <div class="text-xs text-neutral-500">
                {post.question.registerTime}
              </div>
              {/* 수정 시간 */}
              <div class="text-xs text-neutral-500">수정시간</div>
              <div class="text-xs text-neutral-500">
                {post.question.updateTime}
              </div>
            </div>
          </div>

          <div class="mt-4 mb-6">
            {/* 제목 */}
            <div class="mb-3 text-xl font-bold">{post.question.title}</div>
            {/* 내용 */}
            <div class="text-sm text-neutral-600">{post.question.content}</div>
          </div>
        </div>
      </div>

      {post.answer.map((ans) => {
        const answer = (
          <div class="flex items-center justify-center mt-10">
            <div class="rounded-xl border p-5 shadow-xl w-9/12 bg-white">
              <div class="flex w-full items-center justify-between border-b pb-3">
                <div class="flex items-center space-x-3">
                  <div class="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div>
                  {/* 이름 */}
                  <div class="text-lg font-bold text-slate-700">
                    {ans.user.nickname}
                  </div>
                </div>

                <div class="flex items-center space-x-8">
                  {/* 등록 시간 */}
                  <div class="text-xs text-neutral-500">등록시간</div>
                  <div class="text-xs text-neutral-500">{ans.registerTime}</div>
                  {/* 수정 시간 */}
                  <div class="text-xs text-neutral-500">수정시간</div>
                  <div class="text-xs text-neutral-500">{ans.updateTime}</div>
                </div>
              </div>

              <div class="mt-4 mb-6">
                {/* 내용 */}
                <div class="text-sm text-neutral-600">{ans.content}</div>
              </div>
            </div>
          </div>
        );
        return answer;
      })}
    </div>
  );
}

export default Post;

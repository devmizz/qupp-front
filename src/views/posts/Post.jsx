import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import {
  postAnswerReply,
  postQuestionReply,
} from '../../util/axios/post/replyApi';
import { getPost } from '../../util/axios/post/postApi';

import PostItem from '../../components/PostItem';
import Loading from '../../components/Loading';

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const userNickname = localStorage.getItem('userNickname');

  const handleQuestionReply = (id, inputValue) => {
    if (!userNickname) return;

    const body = {
      author: JSON.parse(userNickname),
      comment: inputValue,
    };

    postQuestionReply(id, body).then((result) => {
      setPost(result.data);
    });
  };

  const handleAnswerReply = (id, inputValue) => {
    if (!userNickname || !post) return;

    const body = {
      author: JSON.parse(userNickname),
      comment: inputValue,
    };

    postAnswerReply(post.question.id, id, body).then((result) => {
      setPost(result.data);
    });
  };

  useEffect(() => {
    getPost(id).then((data) => setPost(data));
  }, [id]);

  if (!post) return <Loading />;

  return (
    <div className="flex flex-col w-9/12 mx-auto">
      <PostItem item={post.question} onSubmit={handleQuestionReply} />

      <div className="flex w-full justify-end">
        <Link
          className="flex justify-center py-3 text-black text-center no-underline hover:underline rounded-2xl border bg-neutral-100 w-28 text-xs font-semibold mt-2 hover:bg-slate-400"
          to={`/post/${id}/answer`}
        >
          답변 남기기
        </Link>
        {/* <div className="flex rounded-2xl border bg-neutral-100 w-28 text-xs font-semibold mt-2 items-center justify-center hover:bg-slate-400">
          
        </div> */}
      </div>

      {post.answers.map((answer) => (
        <PostItem item={answer} onSubmit={handleAnswerReply} key={answer.id} />
      ))}
    </div>
  );
}

export default Post;

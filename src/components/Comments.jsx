import { useLocation } from 'react-router-dom';

import { updateReply, deleteReply } from '../util/axios';

function Comments({ comments }) {
  const location = useLocation();

  const onReplyDeleteClick = async (id) => {
    const res = await deleteReply(id);

    if (res.status === 204) {
      window.location.replace(location.pathname);
    }
  };

  const onReplyUpdateClick = async (id) => {
    const content = window.prompt('수정할 댓글을 입력해주세요');

    const res = await updateReply(id, { comment: content });

    if (res.status === 200) {
      window.location.replace(location.pathname);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="overflow-x-auto relative w-full flex items-center justify-center">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 items-center justify-center">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-2 px-4">
                댓글 작성자
              </th>
              <th scope="col" className="py-2 px-4">
                댓글 내용
              </th>
              <th scope="col" className="py-2 px-4">
                등록 시간
              </th>
              <th scope="col" className="py-2 px-4">
                수정
              </th>
              <th scope="col" className="py-2 px-4">
                삭제
              </th>
            </tr>
          </thead>
          {comments.map((comment, index) => (
            <tbody key={index}>
              {comment.user.nickname ===
                JSON.parse(localStorage.getItem('userNickname')) && (
                <tr>
                  <td className="py-1 px-4">{comment.user.nickname}</td>
                  <td className="py-1 px-4">{comment.comment}</td>
                  <td className="py-1 px-4">{comment.registerTime}</td>
                  <td className="py-1 px-4">
                    <button onClick={() => onReplyUpdateClick(comment.id)}>
                      수정
                    </button>
                  </td>
                  <td className="py-1 px-4">
                    <button onClick={() => onReplyDeleteClick(comment.id)}>
                      삭제
                    </button>
                  </td>
                </tr>
              )}

              {comment.user.nickname !==
                JSON.parse(localStorage.getItem('userNickname')) && (
                <tr>
                  <td className="py-1 px-4">{comment.user.nickname}</td>
                  <td className="py-1 px-4">{comment.comment}</td>
                  <td className="py-1 px-4">{comment.registerTime}</td>
                </tr>
              )}
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Comments;

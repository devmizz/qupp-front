export const getReply = (comments) => {

  if(comments.length > 0) {
    return (
      <div className="overflow-x-auto relative w-9/12 flex items-center justify-center">
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
            </tr>
          </thead>
          {comments.map((comment, index) => (
            <tbody key={index}>
              <tr>
                <td>{comment.user.nickname}</td>
                <td>{comment.comment}</td>
                <td>{comment.registerTime}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    ) 
  } else {
    return '';
  }
}

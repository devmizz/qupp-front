import { useState, useEffect } from 'react';

import Table from 'react-bootstrap/Table';

import { getMyPosts } from '../../util/axios';

function MyQuestions() {
  const [posts, setPosts] = useState({});
  const [selectedPage, setSelectedPage] = useState('1');

  const onPageClick = (page) => {
    setSelectedPage(page);
  };

  const getPostsData = async (selectedPage) => {
    const postsData = await getMyPosts(
      localStorage.getItem('userId'),
      selectedPage
    );

    console.log(postsData);

    if (postsData) {
      setPosts(postsData);
    }
  };

  useEffect(() => {
    getPostsData(selectedPage);
  }, [selectedPage]);

  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th className="w-4/12">질문</th>
            <th className="w-2/12">카테고리</th>
            <th className="w-3/12">작성자</th>
            <th className="w-3/12">등록 시간</th>
          </tr>
        </thead>

        {/* {posts.content.map((post, index) => {
          <tbody key={index}>
            <tr>
              <td>{post.title}</td>
              <td>{post.category}</td>
              <td>{post.user.nickname}</td>
              <td>{post.registerTime}</td>
            </tr>
          </tbody>;
        })} */}
      </Table>

      <div className="justify-center my-8 select-none flex">
        {[...Array(posts.totalPages)].map((n, index) => (
          <button
            className="py-2 px-4 shadow-md no-underline rounded-full bg-red text-black font-sans font-semibold text-sm border-red btn-primary hover:text-white hover:bg-red-light focus:outline-none active:shadow-none"
            onClick={() => onPageClick(index + 1)}
            key={index}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MyQuestions;

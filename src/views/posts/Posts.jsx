import { useState, useEffect } from "react";

import Table from "react-bootstrap/Table";

import { getPosts } from "../../apis/axios"

function Posts() {
  const [posts, setPosts] = useState({
    content: [{}]
  });

  const getPostsData = async () => {
    const postsData = await getPosts();

    if(postsData) {
      setPosts(postsData);
    }
  }

  useEffect(() => {
    getPostsData();
  }, []);

  console.log(posts);

  return (
    <div>
      <div class="bg-white">
        <nav class="flex flex-col sm:flex-row w-full">
          <ul class="flex-1 px-10 rounded-xl">
            <li class="flex-1">
              <button class="category text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500">
                  전체
              </button>
            </li>
            <li class="flex-1">
              <button class="category text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
                  인문
              </button>
            </li>
            <li class="flex-1">
              <button class="category text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
                  사회
              </button>
            </li>
            <li class="flex-1">
              <button class="category text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
                  상경
              </button>
            </li>
            <li class="flex-1">
              <button class="category text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
                  자연
              </button>
            </li>
            <li class="flex-1">
              <button class="category text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
                  공학
              </button>
            </li>
            <li class="flex-1">
              <button class="category text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
                  예술
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>질문</th>
            <th>작성자</th>
            <th>등록 시간</th>
          </tr>
        </thead>

        {posts.content.map((post) => (
          <tbody key={post?.question?.id}>
            <tr>
              <td>
                <a href={`/post/${post?.question?.id}`}>{post?.question?.title}</a>
              </td>
              <td>{post.question?.user?.nickname}</td>
              <td>{post.question?.registerTime}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}

export default Posts;

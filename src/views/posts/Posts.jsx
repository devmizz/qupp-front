import { useState, useEffect } from "react";

import Table from "react-bootstrap/Table";

import {getPosts} from "../../apis/axios"

function Posts() {
  const [posts, setPosts] = useState({
    content: []
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
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>질문</th>
          <th>작성자</th>
          <th>등록 시간</th>
        </tr>
      </thead>

      {posts.content.map((post) => (
        <tbody key={post.question.id}>
          <tr>
            <td>
              <a href={`/post/${post.question.id}`}>{post.question.title}</a>
            </td>
            <td>{post.question.user.nickname}</td>
            <td>{post.question.registerTime}</td>
          </tr>
        </tbody>
      ))}
    </Table>
  );
}

export default Posts;

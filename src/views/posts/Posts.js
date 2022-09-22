import axios from "axios";
import { useState, useEffect } from "react";

import Table from "react-bootstrap/Table";

function Post() {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    axios
      .get(
        "http://ec2-3-37-201-15.ap-northeast-2.compute.amazonaws.com:8080/questions"
      )
      .then((res) => {
        setPosts(res.data);
      });
  };

  useEffect(getPosts, []);

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

      {posts.content.map((post) => {
        const tbody = (
          <tbody key={post.question.id}>
            <tr>
              <td>
                <a href={`/post/${post.question.id}`}>{post.question.title}</a>
              </td>
              <td>{post.question.user.nickname}</td>
              <td>{post.question.registerTime}</td>
            </tr>
          </tbody>
        );
        return tbody;
      })}
    </Table>
  );
}

export default Post;

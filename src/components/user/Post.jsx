import React, { useState, useEffect } from 'react';

import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';

import { getMyQuestions, getMyAnswers, getMyComments } from '../../util/axios';
import Pagination from '../Pagination';

const Post = ({ menu }) => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState();

  const getPosts = async (menu, selectedPage) => {
    let res = {};

    switch (menu) {
      case 'question':
        res = await getMyQuestions(
          localStorage.getItem('userId'),
          selectedPage
        );
        break;
      case 'answer':
        res = await getMyAnswers(localStorage.getItem('userId'), selectedPage);
        break;
      case 'comment':
        res = await getMyComments(localStorage.getItem('userId'), selectedPage);
        break;
      default:
        console.log('error');
        navigate(`/`);
    }

    if (res) {
      setPosts(res.data);
    }
  };

  const [selectedPage, setSelectedPage] = useState(1);

  const onPageClick = (page) => {
    setSelectedPage(page);
  };

  useEffect(() => {
    getPosts(menu, selectedPage);
  }, [menu, selectedPage]);

  if (!posts) {
    return <></>;
  }

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="w-6/12">질문</th>
            <th className="w-3/12">작성자</th>
            <th className="w-3/12">등록 시간</th>
          </tr>
        </thead>

        {posts.content.map((post, index) => (
          <tbody key={index}>
            <tr>
              <td>
                <a
                  className="no-underline text-black"
                  href={`/post/${post.id}`}
                >
                  {post.title}
                </a>
              </td>
              <td>{post.user.nickname}</td>
              <td>{post.registerTime}</td>
            </tr>
          </tbody>
        ))}
      </Table>

      {posts && (
        <Pagination
          thisPage={posts.number}
          totalPages={posts.totalPages}
          setPage={onPageClick}
          wait={3000}
        />
      )}
    </div>
  );
};

export default Post;

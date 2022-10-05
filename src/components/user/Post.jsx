import React, { useState, useEffect } from 'react';

import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';

import { getMyQuestions, getMyAnswers, getMyComments } from '../../util/axios';
import Pagination from '../Pagination';

const Post = ({ menu }) => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState({
    content: [
      {
        id: undefined,
        title: undefined,
        content: undefined,
        category: undefined,
        registerTime: undefined,
        updateTime: undefined,
        user: {
          id: undefined,
          email: undefined,
          nickname: undefined,
        },
        comments: [
          {
            id: undefined,
            comment: undefined,
            registerTime: undefined,
            updateTime: undefined,
            user: {
              id: undefined,
              email: undefined,
              nickname: undefined,
            },
          },
        ],
      },
    ],
  });

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

      {/* <div className="justify-center my-8 select-none flex">
        {[...Array(posts.totalPages)].map((n, index) => (
          <button
            className={
              `py-2 px-4 shadow-md no-underline rounded-full bg-red text-sm border-red btn-primary 
              focus:outline-none${selectedPage} === ${index + 1}`
                ? `font-bold`
                : ''
            }
            onClick={() => onPageClick(index + 1)}
            key={index}
          >
            {index + 1}
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default Post;

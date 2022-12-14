import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Table from 'react-bootstrap/Table';

import { getPosts } from '../../util/axios/post/postApi';

import Pagination from '../../components/Pagination';
import Loading from '../../components/Loading';

const categories = [
  {
    id: 'All',
    text: '전체',
  },
  {
    id: 'Humanities',
    text: '인문',
  },
  {
    id: 'SocialScience',
    text: '사회',
  },
  {
    id: 'Business',
    text: '상경',
  },
  {
    id: 'NaturalScience',
    text: '자연',
  },
  {
    id: 'Engineering',
    text: '공학',
  },
  {
    id: 'Art',
    text: '예술',
  },
];

function Posts() {
  const [posts, setPosts] = useState();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPage, setSelectedPage] = useState('1');

  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const onCategoryClick = (id) => {
    setSelectedCategory(id);
  };

  const onTitleClick = (id) => {
    navigate(`/post/${id}`);
  };

  const onPageClick = (page) => {
    setSelectedPage(page);
  };

  const getPostsData = async (selectedCategory, selectedPage) => {
    const res = await getPosts(selectedCategory, selectedPage);

    if (res) {
      setPosts(res);
    }
  };

  useEffect(() => {
    getPostsData(selectedCategory, selectedPage);
  }, [user]);

  useEffect(() => {
    getPostsData(selectedCategory, selectedPage);
  }, [selectedCategory, selectedPage]);

  if (!posts) {
    return <Loading />;
  }

  return (
    <div className="container">
      <div>
        <nav className="flex flex-col sm:flex-row w-full">
          <ul className="flex flex-1 flex-row px-10 rounded-xl">
            {categories.map((category) => (
              <li
                key={category.id}
                className={`text-gray-600 flex flex-1 justify-center hover:text-blue-500 focus:outline-none${
                  category.id === selectedCategory
                    ? ` text-blue-500 border-b-2 font-medium border-blue-500`
                    : ''
                }`}
              >
                <button
                  className="py-4 px-6"
                  onClick={() => onCategoryClick(category.id)}
                >
                  {category.text}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="w-6/12">질문</th>
            <th className="w-3/12">작성자</th>
            <th className="w-3/12">등록 시간</th>
          </tr>
        </thead>

        {posts.data.content.map((post, index) => (
          <tbody key={index}>
            <tr>
              <td>
                <button onClick={() => onTitleClick(post.question.id)}>
                  {post.question.title}
                </button>
                {/* <a
                  className="no-underline text-black"
                  href={`/post/${post.question.id}`}
                >
                  {post.question.title}
                </a> */}
              </td>
              <td>{post.question.user.nickname}</td>
              <td>{post.question.registerTime}</td>
            </tr>
          </tbody>
        ))}
      </Table>

      {posts && (
        <Pagination
          thisPage={posts.data.number}
          totalPages={posts.data.totalPages}
          setPage={onPageClick}
        />
      )}
    </div>
  );
}

export default Posts;

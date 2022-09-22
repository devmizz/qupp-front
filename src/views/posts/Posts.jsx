import { useState, useEffect } from "react";

import Table from "react-bootstrap/Table";

import { getPosts } from "../../apis/axios";

const categories = [
  {
    id: 0,
    text: "전체",
  },
  {
    id: 1,
    text: "인문",
  },
  {
    id: 2,
    text: "사회",
  },
  {
    id: 3,
    text: "상경",
  },
  {
    id: 4,
    text: "자연",
  },
  {
    id: 5,
    text: "공학",
  },
  {
    id: 6,
    text: "예술",
  },
];

function Posts() {
  const [posts, setPosts] = useState({
    content: [{}],
  });
  const [selectedCategory, setSelectedCategory] = useState(0);

  const onCategoryClick = (id) => setSelectedCategory(id);

  const getPostsData = async () => {
    const postsData = await getPosts();

    if (postsData) {
      setPosts(postsData);
    }
    console.log(postsData);
  };

  useEffect(() => {
    getPostsData();
  }, []);

  return (
    <div>
      <div className="bg-white">
        <nav className="flex flex-col sm:flex-row w-full">
          <ul className="flex flex-1 flex-row px-10 rounded-xl">
            {categories.map((category) => (
              <li
                key={category.text}
                className={`text-gray-600 py-4 px-6 flex flex-1 justify-center hover:text-blue-500 focus:outline-none${
                  category.id === selectedCategory
                    ? ` text-blue-500 border-b-2 font-medium border-blue-500`
                    : ""
                }`}
              >
                <button onClick={() => onCategoryClick(category.id)}>
                  {category.text}
                </button>
              </li>
            ))}
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
                <a href={`/post/${post?.question?.id}`}>
                  {post?.question?.title}
                </a>
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

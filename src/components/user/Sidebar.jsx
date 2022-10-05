import React, { useState } from 'react';

const menus = [
  {
    id: 'info',
    text: '내정보',
  },
  {
    id: 'question',
    text: '질문글',
  },
  {
    id: 'answer',
    text: '답글',
  },
  {
    id: 'comment',
    text: '댓글',
  },
];

const Sidebar = ({ onClickMenu }) => {
  const [selectedMenu, setMenu] = useState('info');

  const onClick = (id) => {
    setMenu(id);
    onClickMenu(id);
  };

  return (
    <div>
      <ul>
        {menus.map((menu) => (
          <li
            key={menu.id}
            className={`${
              menu.id === selectedMenu ? `font-bold text-slate-400` : ''
            }`}
          >
            <button onClick={() => onClick(menu.id)}>{menu.text}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

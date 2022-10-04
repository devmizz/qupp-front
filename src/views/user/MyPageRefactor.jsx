import React, { useState } from 'react';
import Sidebar from '../../components/user/Sidebar';
import Content from '../../components/user/Content';

const MyPage = () => {
  const [menu, setMenu] = useState('info');

  const onClickMenu = (id) => {
    setMenu(id);
  };

  return (
    <div className="flex">
      <div id="sidebar" className="w-2/12">
        <Sidebar onClickMenu={onClickMenu} />
      </div>
      <div id="content" className="w-10/12">
        <Content menu={menu} />
      </div>
    </div>
  );
};

export default MyPage;

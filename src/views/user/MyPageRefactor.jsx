import React, { useState } from 'react';

import Sidebar from '../../components/user/Sidebar';
import Info from '../../components/user/Info';
import Post from '../../components/user/Post';

const MyPage = () => {
  const [menu, setMenu] = useState();

  const onClickMenu = (id) => {
    setMenu(id);
  };

  return (
    <div className="flex">
      <div id="sidebar" className="w-2/12">
        <Sidebar onClickMenu={onClickMenu} />
      </div>
      <div id="content" className="w-8/12">
        {menu === 'info' ? <Info /> : <Post menu={menu} />}
      </div>
      <div className="w-2/12"></div>
    </div>
  );
};

export default MyPage;

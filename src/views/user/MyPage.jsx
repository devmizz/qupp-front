import React, { useState } from 'react';

import Sidebar from '../../components/user/Sidebar';
import Info from '../../components/user/Info';
import MyPost from '../../components/user/MyPost';

const MyPage = () => {
  const [menu, setMenu] = useState('info');

  const onClickMenu = (id) => {
    setMenu(id);
  };

  return (
    <div className="flex">
      <div id="sidebar" className="w-3/12">
        <Sidebar onClickMenu={onClickMenu} />
      </div>
      <div id="content" className="w-9/12">
        {menu === 'info' ? <Info /> : <MyPost menu={menu} />}
      </div>
    </div>
  );
};

export default MyPage;

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
      <div id="content" className="w-10/12">
        {console.log(menu)}
        {menu ? <Post menu={menu} /> : <Info />}
      </div>
    </div>
  );
};

export default MyPage;

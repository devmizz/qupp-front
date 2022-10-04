import React from 'react';

const Content = ({ menu }) => {
  return (
    <div id="content">
      {menu}
      {console.log(menu)}
    </div>
  );
};

export default Content;

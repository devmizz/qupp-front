import { useState, useEffect } from 'react';

import Editor from '../../components/post/Editor';

const Write = () => {
  const [content, setContent] = useState();

  const handleMessageChange = (data) => {
    setContent(data);
    console.log('content: ' + content);
  };

  return (
    <div id="write" className="flex">
      <div className="w-8/12 justify-center m-auto">
        <Editor handleMessage={handleMessageChange} />
      </div>
    </div>
  );
};

export default Write;

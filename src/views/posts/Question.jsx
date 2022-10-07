import { useState, useEffect } from 'react';

import Editor from '../../components/post/Editor';

const Question = () => {
  const [content, setContent] = useState();

  const handleMessageChange = (data) => {
    setContent(data);
    console.log('content: ' + content);
  };

  return (
    <div id="question" className="w-8/12 m-auto">
      <div className="flex">
        <div className="font-bold text-4xl">제목</div>
        <div>
          <input
            className="w-full bg-slate-100"
            placeholder="제목을 입력해주세요."
          ></input>
        </div>
      </div>
      <div className="justify-center">
        <Editor handleMessage={handleMessageChange} />
      </div>
    </div>
  );
};

export default Question;

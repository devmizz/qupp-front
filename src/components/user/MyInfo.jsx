import { useState } from 'react';

import { updateUserInfo } from '../../util/axios';

function MyInfo() {
  const [updateEmail, setUpdateEmail] = useState('');
  const [updateNickname, setUpdateNickname] = useState('');

  const handleInputUpdateEmail = (e) => {
    setUpdateEmail(e.target.value);
  };

  const handleInputUpdateNickname = (e) => {
    setUpdateNickname(e.target.value);
  };

  const handleNicknameSubmit = (e) => {
    e.preventDefault();

    const body = {
      email: JSON.parse(localStorage.getItem('userEmail')),
      nickname: updateNickname,
    };

    const res = updateUserInfo(localStorage.getItem('userId'), body);

    console.log(res);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    const body = {
      email: updateEmail,
      nickname: JSON.parse(localStorage.getItem('userNickname')),
    };

    const res = updateUserInfo(localStorage.getItem('userId'), body);

    console.log(res);
  };

  return (
    <div className="flex flex-col rounded-md bg-slate-100 px-4 py-2 text-lg w-8/12">
      <div className="flex my-2">
        <div className="flex">
          <div className="py-2">이메일</div>
          <div className="py-2 pl-4">
            <div>{JSON.parse(localStorage.getItem('userEmail'))}</div>
            <div>
              <div className="flex mt-3">
                <form className="flex" onSubmit={handleEmailSubmit}>
                  <input
                    type="email"
                    placeholder="변경할 닉네임"
                    className="flex items-center justify-center w-6/12"
                    value={updateEmail}
                    onChange={handleInputUpdateEmail}
                  />

                  <button
                    className="flex items-center justify-center ml-4 bg-gray-700 text-gray-200 font-medium text-center py-1 px-1 rounded-md"
                    type="submit"
                  >
                    이메일 변경하기
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex my-2">
        <div className="flex w-8/12">
          <div className="flex py-2">닉네임</div>
          <div className="flex flex-col py-2 pl-4">
            <div>{JSON.parse(localStorage.getItem('userNickname'))}</div>

            <div className="flex mt-3">
              <form className="flex" onSubmit={handleNicknameSubmit}>
                <input
                  type="nickname"
                  placeholder="변경할 닉네임"
                  className="flex items-center justify-center w-6/12"
                  value={updateNickname}
                  onChange={handleInputUpdateNickname}
                />

                <button
                  className="flex items-center justify-center ml-4 bg-gray-700 text-gray-200 font-medium text-center py-1 px-1 rounded-md"
                  type="submit"
                >
                  닉네임 변경하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyInfo;

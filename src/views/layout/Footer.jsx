import React from 'react';

export default function Footer() {
  return (
    <footer className="relative py-10 flex items-center justify-evenly bg-gray-700 md:py-10">
      <div className="flex text-gray-300">
        <h1>QUPP</h1>
      </div>
      <div className="flex flex-col text-gray-300">
        <h4>Question University Problem Platform</h4>
        <div className="flex text-center justify-evenly">
          <div className="m-auto">
            <div className="flex">
              <div className="m-1">팀장</div>
              <div className="m-1">민찬기</div>
            </div>
            <div className="flex">
              <div className="m-1">팀원</div>
              <div className="m-1">김세은</div>
            </div>
            <div className="flex">
              <div className="m-1">팀원</div>
              <div className="m-1">송용호</div>
            </div>
          </div>
          <div className="m-auto">
            <div className="flex">
              <div className="m-1">팀원</div>
              <div className="m-1">임소망</div>
            </div>
            <div className="flex">
              <div className="m-1">팀원</div>
              <div className="m-1">정영환</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React, { useState, useEffect } from 'react';

const Pagination = ({ thisPage = 1, totalPages, setPage }) => {
  const [now, setNow] = useState();
  const [total, setTotal] = useState();
  const bundleStart = parseInt((now + 1) / 5) * 5 + 1;

  const onPageClick = (num) => {
    setNow(num);
    setPage(num);
  };

  useEffect(() => {
    setNow(thisPage);
    setTotal(totalPages);
  }, [thisPage, totalPages]);

  return (
    <div id="pagination" className="flex justify-center my-8">
      {console.log(thisPage)}
      {now > 5 && <button>Prev</button>}
      {[...Array(5)].map((n, index) => {
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-black py-2 px-4 rounded-full 
          ${now === index + bundleStart ? `text-bold bg-blue-700` : ''}`}
          onClick={() => onPageClick(index + bundleStart)}
          key={index}
        >
          {index + bundleStart}
        </button>;
      })}
      {now < parseInt(total / 5) && <button>Next</button>}
    </div>
  );
};

export default Pagination;

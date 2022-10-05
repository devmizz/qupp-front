import React, { useState, useEffect } from 'react';

import { PAGE_LIMIT } from '../constants';

const Pagination = ({ thisPage, totalPages, setPage }) => {
  const [now, setNow] = useState(thisPage);
  const [total, setTotal] = useState(totalPages);
  const [bundleMax, setBundleMax] = useState(
    total > PAGE_LIMIT ? PAGE_LIMIT : total
  );
  const [bundleMin, setBundleMin] = useState(1);
  const [isPrev, setIsPrev] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const bundleStart = parseInt((now + 1) / PAGE_LIMIT) * PAGE_LIMIT + 1;

  const onPageClick = (num) => {
    setNow(num);
    setPage(num);
  };

  const onPrevClick = () => {
    if (bundleMin > PAGE_LIMIT) {
      setBundleMin(bundleMin - PAGE_LIMIT);
      setBundleMax(bundleMax - PAGE_LIMIT);

      setIsNext(true);
      if (bundleMin < PAGE_LIMIT) {
        setIsPrev(false);
      }
    }
  };

  const onNextClick = () => {
    if (bundleMax < total) {
      setBundleMin(bundleMin + PAGE_LIMIT);
      setBundleMax(bundleMax + PAGE_LIMIT);

      setIsPrev(true);
      if (bundleMax > total) {
        setIsNext(false);
        setBundleMax(total);
      }
    }
  };

  useEffect(() => {
    setNow(thisPage);
    setTotal(totalPages);
    if (totalPages > PAGE_LIMIT) {
      setIsNext(true);
    }
  }, []);

  return (
    <div id="pagination" className="flex justify-center my-8">
      {console.log(bundleMax)}
      {console.log(bundleMin)}
      {console.log(bundleMax - bundleMin + 1)}
      <div>{isPrev && <button onClick={() => onPrevClick}>Prev</button>}</div>
      <div>
        {[...Array(bundleMax - bundleMin + 1)].map((n, index) => (
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-black py-2 px-4 rounded-full 
          ${now === index + bundleStart ? `text-bold bg-blue-700` : ''}`}
            onClick={() => onPageClick(index + bundleStart)}
            key={index}
          >
            {index + bundleStart}
          </button>
        ))}
      </div>
      <div>{isNext && <button onClick={() => onNextClick}>Next</button>}</div>
    </div>
  );
};

export default Pagination;

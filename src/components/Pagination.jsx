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
    setNow(0);
    setTotal(totalPages);
    setIsPrev(false);
    if (totalPages > PAGE_LIMIT) {
      setIsNext(true);
    }
    setBundleMax(total > PAGE_LIMIT ? PAGE_LIMIT : total);
  }, []);

  return (
    <div id="pagination" className="flex justify-center my-8">
      <div>{isPrev && <button onClick={() => onPrevClick}>Prev</button>}</div>
      <div>
        {[...Array(bundleMax - bundleMin + 1)].map((n, index) => (
          <button
            className={`py-2 px-4 shadow-md no-underline rounded-full bg-red text-black font-sans text-sm border-red btn-primary hover:text-white hover:bg-red-light focus:outline-none active:shadow-none
                      ${
                        now === index + bundleMin
                          ? `text-bold bg-slate-400 shadow-none`
                          : ''
                      }`}
            onClick={() => onPageClick(index + bundleMin)}
            key={index}
          >
            {index + bundleMin}
          </button>
        ))}
      </div>
      <div>{isNext && <button onClick={() => onNextClick}>Next</button>}</div>
    </div>
  );
};

export default Pagination;

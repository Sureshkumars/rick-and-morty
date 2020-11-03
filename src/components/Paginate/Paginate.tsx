import React from "react";
import style from "./index.module.css";

interface PaginateProps {
  currentPage: number;
  pageCount: number;
  onPageClick: (currentPage: number) => void;
}

const Paginate = (props: PaginateProps) => {
  const { currentPage, pageCount, onPageClick } = props;

  const isFirst = currentPage === 1;
  const isLast = currentPage === pageCount;

  const pages = Array.from(Array(pageCount).keys()).map((value) => value + 1);

  return (
    <div className={style.paginationContainer}>
      <div className={style.paginationButtonContainer}>
        {!isFirst && (
          <div
            className={style.pagination_button}
            onClick={() => onPageClick(currentPage - 1)}
          >
            &lt;
          </div>
        )}
        {pages.map((page) => {
          const disabled =
            page !== 1 && page !== pageCount
              ? Math.abs(page - currentPage) > 1
              : false;
          const isPreviousDisabled =
            page - 1 !== 1 && page - 1 !== pageCount
              ? Math.abs(page - 1 - currentPage) > 1
              : false;

          if (isPreviousDisabled && disabled) {
            return null;
          }

          return (
            <div
              key={page}
              className={`${style.pagination_button} ${
                page === currentPage ? style.highlight : ""
              } ${disabled ? style.disabled : ""}`}
              onClick={() => page !== currentPage && onPageClick(page)}
            >
              {disabled ? "..." : page}
            </div>
          );
        })}
        {!isLast && (
          <div
            className={style.pagination_button}
            onClick={() => onPageClick(currentPage + 1)}
          >
            &gt;
          </div>
        )}
      </div>
    </div>
  );
};

export default Paginate;

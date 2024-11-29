import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import PaginationItem from "./PaginationItem";
export default function Pagination({ totalPages, currentPage }) {
  const pages = [...Array(totalPages).keys()].map((i) => i + 1);

  return (
    <ul className="pagination home-product__pagination">
      <PaginationItem
        isIcon={true}
        icon={faAngleLeft}
        link={`/page/${Math.max(currentPage - 1, 1)}`}
      />
      {pages.map((page) => (
        <PaginationItem
          key={page}
          page={page}
          isActive={page === currentPage}
          link={`/page/${page}`}
        />
      ))}
      <PaginationItem
        isIcon={true}
        icon={faAngleRight}
        link={`/page/${Math.min(currentPage + 1, totalPages)}`}
      />
    </ul>
  );
}

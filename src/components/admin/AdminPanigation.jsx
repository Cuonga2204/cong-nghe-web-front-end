import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
const AdminPagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="pagination-container">
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        <FontAwesomeIcon icon={faAngleLeft} className="pagination-item__icon" />
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={`pagination-button ${
            currentPage === index + 1 ? "active" : ""
          }`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        <FontAwesomeIcon
          icon={faAngleRight}
          className="pagination-item__icon"
        />
      </button>
    </div>
  );
};

export default AdminPagination;

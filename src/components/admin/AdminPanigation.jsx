import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const AdminPagination = ({ currentPage, totalPages, onPageChange }) => {
  // Xử lý khi nhấn nút "Trang trước"
  console.log(totalPages);

  const handlePrevPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  // Xử lý khi nhấn nút "Trang sau"
  const handleNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="pagination-container">
      {/* Nút "Trang trước" */}
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1} // Vô hiệu hóa nếu đang ở trang đầu
        className="pagination-item__icon"
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      {/* Nút số trang */}
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
      {/* Nút "Trang sau" */}
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages} // Vô hiệu hóa nếu đang ở trang cuối
        className="pagination-item__icon"
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
};

export default AdminPagination;

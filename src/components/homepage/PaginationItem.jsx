import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function PaginationItem({ isActive, isIcon, icon, page, link }) {
  return (
    <li
      className={`pagination-item ${isActive ? "pagination-item--active" : ""}`}
    >
      <Link to={link} className="pagination-item__link">
        {isIcon ? (
          <FontAwesomeIcon icon={icon} className="pagination-item__icon" />
        ) : (
          page
        )}
      </Link>
    </li>
  );
}

export default PaginationItem;

import React from "react";

export default function FooterSection() {
  return (
    <>
      <div className="grid__row-column-2-4">
        <h3 className="footer__heading">{heading}</h3>
        <ul className="footer-list">
          {items.map((item, index) => (
            <li key={index} className="footer-item">
              <a href={item.href} className="footer-item__link">
                {item.icon && (
                  <i className={`footer-item__icon fa-brands ${item.icon}`}></i>
                )}
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

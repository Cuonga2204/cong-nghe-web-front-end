import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="grid">
          <div className="grid__row">
            <div className="grid__row-column-2-4">
              <h3 className="footer__heading">Chăm sóc khách hàng</h3>
              <ul className="footer-list">
                <li className="footer-item">
                  <a href="#" className="footer-item__link">
                    Trung tâm trợ giúp
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-item__link">
                    KShop mail
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-item__link">
                    Hướng dẫn mua hàng
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid__row-column-2-4">
              <h3 className="footer__heading">Về ticked</h3>
              <ul className="footer-list">
                <li className="footer-item">
                  <a href="#" className="footer-item__link">
                    Giới thiệu
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-item__link">
                    Tuyển dụng
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-item__link">
                    Điều khoản
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid__row-column-2-4">
              <h3 className="footer__heading">Danh mục</h3>
              <ul className="footer-list">
                <li className="footer-item">
                  <a href="#" className="footer-item__link">
                    Laptop Gaming
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-item__link">
                    Laptop Văn Phòng
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-item__link">
                    Laptop Đồ Họa
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid__row-column-2-4">
              <h3 className="footer__heading">Theo dõi chúng tôi trên</h3>
              <ul className="footer-list">
                <li className="footer-item">
                  <a href="#" className="footer-item__link">
                    <i className="footer-item__icon fa-brands fa-facebook"></i>
                    Facebook
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-item__link">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="footer-item__icon"
                    />
                    {/* <i className="footer-item__icon fa-brands fa-instagram"></i> */}
                    Instagram
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-item__link">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="footer-item__icon"
                    />
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid__row-column-2-4">
              <h3 className="footer__heading">Theo dõi chúng tôi trên</h3>
              <ul className="footer-list">
                <li className="footer-item">
                  <a href="#" className="footer-item__link">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="footer-item__icon"
                    />
                    Facebook
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-item__link">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="footer-item__icon"
                    />
                    Instagram
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-item__link">
                    <i className="footer-item__icon fa-brands fa-linkedin"></i>
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      );
    </>
  );
}

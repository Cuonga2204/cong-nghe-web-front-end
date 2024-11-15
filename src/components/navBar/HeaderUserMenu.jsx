import { Link } from "react-router-dom";

const HeaderUserMenuItem = ({ href, text, separate }) => (
  <li className="header__navbar-user-item">
    <Link to={href}>{text}</Link>
  </li>
);

// HeaderUserMenu Component
const HeaderUserMenu = () => (
  <ul className="header__navbar-user-menu">
    <HeaderUserMenuItem href="/account" text="Tài khoản của tôi" />
    <HeaderUserMenuItem href="/address" text="Địa chỉ của tôi" />
    <HeaderUserMenuItem href="/orderStatus" text="Đơn mua" />
    <HeaderUserMenuItem href="/login" text="Đăng xuất" separate />
  </ul>
);

export default HeaderUserMenu;

import React from "react";

export default function AuthHeader({ title }) {
  return (
    <header className="header-login">
      <div className="grid">
        <div className="header-login-wrap">
          <div className="header-logo">
            <img src="/img/Logo.png" alt="" className="header__logo-img" />
          </div>
          <span>{title}</span>
        </div>
      </div>
    </header>
  );
}

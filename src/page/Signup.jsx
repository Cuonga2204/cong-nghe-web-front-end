import React from "react";
import AuthHeader from "../components/authForm/AuthHeader";
import { Link } from "react-router-dom";
import AuthFormInput from "../components/authForm/AuthFormInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSignUp = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/user/sign-up",
        {
          email: email,
          password: password,
          confirmPassword: confirmPassword,
        }
      );
      if (response.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      console.log("erro", error);
    }

  };
  return (
    <>
      <AuthHeader title="Đăng ký"></AuthHeader>
      <div>
        <form
          className="container-login"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="modal__body">
            <div className="auth-form">
              <div className="auth-form__container">
                <div className="auth-form__header">
                  <h3 className="authen-form__heading">
                    <Link to="/signup">Đăng ký</Link>
                  </h3>
                </div>

                <div className="auth-form__form">
                  <AuthFormInput
                    id="email"
                    value={email}
                    placeholder="Nhập email"
                    onChange={handleEmailChange}
                  />
                  <AuthFormInput
                    id="password"
                    type="password"
                    value={password}
                    placeholder="Nhập mật khẩu"
                    onChange={handlePasswordChange}
                    autoComplete="new-password"
                  />

                  <AuthFormInput
                    id="confirmPassword"
                    placeholder="Nhập lại mật khẩu"
                    type="password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    autoComplete="new-password"
                  />
                </div>

                <div className="auth-form__aside">
                  <p className="auth-form__policy-text">
                    Bằng việc đăng ký, bạn có đồng ý
                    <a href="/" className="auth-form__policy-link">
                      Điều khoản dịch vụ{" "}
                    </a>
                    &
                    <a href="/" className="auth-form__policy-link">
                      Chính sách bảo mật
                    </a>
                  </p>
                </div>
                <div className="auth-form__account">
                  <span>Bạn đã có tài khoản ? </span>
                  <Link to="/login">Đăng nhập</Link>
                </div>
                <div className="auth-form__controls">
                  <button className="btn auth-form__controls-back btn-normal">
                    Trở lại
                  </button>
                  <div to={"/login"}>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={handleSignUp}
                    >
                      Đăng ký
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Signup;

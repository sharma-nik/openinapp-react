import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//icons
import logo from "../../assets/Logo2.svg";
import logoHighlight from "../../assets/Logo2_Highlight.svg";
import githubLogo from "../../assets/Github.svg";
import linkedinLogo from "../../assets/Linkedin_logo.svg";
import twitterLogo from "../../assets/Twitter_logo.svg";
import discordLogo from "../../assets/Discord_logo.svg";
import googleLogo from "../../assets/Google_logo.svg";
import appleLogo from "../../assets/Apple_logo.svg";

//styles
import "./Login.scss";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    navigate("/home");
  };

  return (
    <div className="login">
      <div className="login__left-side">
        <div className="login__app-logo-container">
          <img className="login__app-logo" src={logo} />
          <img className="login__app-logo-highlight" src={logoHighlight} />
        </div>

        <p className="login__app-name">BASE</p>

        <div className="login__contact-container">
          <img src={githubLogo} className="login__contact-logo" />
          <img src={twitterLogo} className="login__contact-logo" />
          <img src={linkedinLogo} className="login__contact-logo" />
          <img src={discordLogo} className="login__contact-logo" />
        </div>
      </div>
      <div className="login__right-side">
        <div className="login__sign-in-container">
          <p className="login__sign-in-label">Sign In</p>
          <p className="login__sign-in-sub-label">Sign in to your account</p>

          <div className="login__sign-in-wrapper">
            <button className="login__sign-in-button">
              <span>
                <img className="login__sign-in-icon" src={googleLogo} />
              </span>
              Sign in with Google
            </button>
            <button className="login__sign-in-button">
              <span>
                <img className="login__sign-in-icon" src={appleLogo} />
              </span>
              Sign in with Apple
            </button>
          </div>

          <div className="login__sign-in">
            <form onSubmit={handleSubmit}>
              <div>
                <label className="login__sign-in-text" htmlFor="email">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="login__sign-in-input"
                  value={loginData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="login__sign-in-text" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="login__sign-in-input"
                  value={loginData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <p className="login__forgot-password">Forgot password?</p>
              <div>
                <button className="login__button">Sign in</button>
              </div>
            </form>
          </div>

          <p className="login__register-label">
            Don't have an account{" "}
            <span className="login__register-sub-label">Register here</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

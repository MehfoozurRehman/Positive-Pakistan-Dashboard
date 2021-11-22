import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Assets/logo.svg";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="login__container">
      <form
        onSubmit={() => {
          navigate("/dashboard");
        }}
        className="login__container__form"
      >
        <Link to="/" className="header__logo">
          <img src={logo} alt="logo" className="header__logo__img" />
        </Link>
        <input
          type="email"
          placeholder="Email Address"
          className="login__container__form__input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="login__container__form__input"
          required
        />
        <div className="login__container__form__checkbox">
          <input
            className="checkbox"
            id="login__container__form__checkbox"
            type="checkbox"
            value="Remember"
            name="Remember"
          />
          <label htmlFor="login__container__form__checkbox">Remember Me</label>
        </div>
        <button
          className="login__container__form__btn"
          style={{ marginTop: "3em" }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

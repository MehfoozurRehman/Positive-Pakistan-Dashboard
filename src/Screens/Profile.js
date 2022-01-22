import React from "react";
import { useNavigate } from "react-router-dom";
import InputBox from "../Components/InputBox";
import userPic from "../Assets/userPic.png";

export default function EditNews() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const navigate = useNavigate();
  return (
    <div className="container">
      {/* <div className="container__heading__container">
        <button
          onClick={() => {
            navigate("/dashboard/news");
          }}
          className="container__heading__container__btn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-arrow-left"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>
        <div className="container__heading__back">Profile</div>
      </div> */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="container__form"
      >
        <form style={{ width: 450 }} className="side__bar__content__form">
          <div className="side__bar__content__form__input">
            <input
              type="file"
              name="side__bar__content__form__input__file"
              id="side__bar__content__form__input__file"
              className="side__bar__content__form__input__file"
            />
            <div className="side__bar__content__form__input__overlay">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-camera"
              >
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
            </div>
            <img src={userPic} alt="userPic" className="header__logo__img" />
          </div>
          <InputBox type="email" placeholder="User Name" />
          <InputBox type="email" placeholder="Email Address" />
          <InputBox type="password" placeholder="Password" />
          <InputBox type="password" placeholder="Confirm Password" />

          <button
            className="login__container__form__btn"
            style={{ marginTop: "1em" }}
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.svg";
import userPic from "../Assets/userPic.png";

export default function Header() {
  return (
    <div className="header">
      <Link to="/dashbaord" className="header__logo">
        <img src={logo} alt="logo" className="header__logo__img" />
      </Link>
      <div className="header__buttons">
        <button className="header__buttons__icon__btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14.376"
            height="17.994"
            viewBox="0 0 14.376 17.994"
          >
            <g
              id="Icon_ionic-ios-notifications-outline"
              data-name="Icon ionic-ios-notifications-outline"
              transform="translate(-6.775 -3.93)"
            >
              <path
                id="Path_12011"
                data-name="Path 12011"
                d="M18.327,28.336a.582.582,0,0,0-.571.459,1.127,1.127,0,0,1-.225.49.85.85,0,0,1-.724.265.864.864,0,0,1-.724-.265,1.127,1.127,0,0,1-.225-.49.582.582,0,0,0-.571-.459h0a.586.586,0,0,0-.571.715,2.009,2.009,0,0,0,2.091,1.669A2.006,2.006,0,0,0,18.9,29.051a.589.589,0,0,0-.571-.715Z"
                transform="translate(-2.857 -8.795)"
                fill="#1e1d1d"
              />
              <path
                id="Path_12012"
                data-name="Path 12012"
                d="M20.97,17.256c-.693-.913-2.055-1.448-2.055-5.536,0-4.2-1.853-5.882-3.58-6.287-.162-.04-.279-.094-.279-.265v-.13A1.1,1.1,0,0,0,13.977,3.93H13.95a1.1,1.1,0,0,0-1.079,1.106v.13c0,.166-.117.225-.279.265-1.731.409-3.58,2.091-3.58,6.287,0,4.088-1.363,4.619-2.055,5.536a.893.893,0,0,0,.715,1.43h12.6A.893.893,0,0,0,20.97,17.256Zm-1.754.261H8.729a.2.2,0,0,1-.148-.328,5.448,5.448,0,0,0,.944-1.5,10.192,10.192,0,0,0,.643-3.967,6.9,6.9,0,0,1,.94-3.9,2.886,2.886,0,0,1,1.74-1.241,1.576,1.576,0,0,0,.836-.472.356.356,0,0,1,.535-.009,1.629,1.629,0,0,0,.845.481,2.886,2.886,0,0,1,1.74,1.241,6.9,6.9,0,0,1,.94,3.9,10.192,10.192,0,0,0,.643,3.967,5.511,5.511,0,0,0,.967,1.525A.186.186,0,0,1,19.216,17.517Z"
                transform="translate(0 0)"
                fill="#1e1d1d"
              />
            </g>
          </svg>
        </button>
        <button className="header__buttons__user__btn">
          <img src={userPic} alt="userPic" className="header__logo__img" />
        </button>
      </div>
    </div>
  );
}

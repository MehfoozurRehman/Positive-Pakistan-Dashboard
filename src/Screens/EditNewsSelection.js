import React from "react";
import { Link, useNavigate } from "react-router-dom";
import InputBox from "../Components/InputBox";

export default function EditNewsSelection() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="container__heading__container">
        <button
          onClick={() => {
            navigate("/dashboard/news-selection");
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
        <div className="container__heading__back">Edit News Selection</div>
      </div>
      <div className="container__form">
        <div className="container__form__left">
          <div className="container__form__heading">Main News</div>
          <InputBox
            options={options}
            variant="select"
            placeholder="Sub-catagory"
          />
          <div className="container__form__heading">Secondry News</div>
          <InputBox
            options={options}
            variant="select"
            placeholder="Sub-catagory"
          />
          <InputBox
            options={options}
            variant="select"
            placeholder="Sub-catagory"
          />
          <InputBox
            options={options}
            variant="select"
            placeholder="Sub-catagory"
          />
        </div>
        <div className="container__form__right">
          <div className="container__form__heading">Trending News</div>
          <InputBox
            options={options}
            variant="select"
            placeholder="Sub-catagory"
          />
          <InputBox
            options={options}
            variant="select"
            placeholder="Sub-catagory"
          />
          <InputBox
            options={options}
            variant="select"
            placeholder="Sub-catagory"
          />
          <InputBox
            options={options}
            variant="select"
            placeholder="Sub-catagory"
          />
          <InputBox
            options={options}
            variant="select"
            placeholder="Sub-catagory"
          />
        </div>
      </div>
    </div>
  );
}

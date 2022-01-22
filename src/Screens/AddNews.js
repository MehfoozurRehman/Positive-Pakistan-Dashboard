import React from "react";
import { useNavigate } from "react-router-dom";
import InputBox from "../Components/InputBox";

export default function EditNews() {
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
        <div className="container__heading__back">Add News</div>
      </div>
      <div className="container__form">
        <div className="container__form__left">
          <div className="container__form__heading">Title</div>
          <InputBox placeholder="Write something...." />
          <div className="container__form__heading">Category</div>
          <InputBox
            variant="select"
            isMulti="true"
            options={options}
            placeholder="Category"
          />
          <div className="container__form__heading">Sub Category</div>
          <InputBox
            variant="select"
            isMulti="true"
            options={options}
            placeholder="Sub Category"
          />
          <div className="container__form__heading">Content</div>
          <InputBox
            options={options}
            variant="textarea"
            placeholder="Write something...."
          />
          <button
            className="login__container__form__btn"
            style={{ marginTop: ".5em", marginLeft: "auto", width: "100px" }}
          >
            Publish
          </button>
        </div>
        <div className="container__form__right" style={{ maxWidth: "30%" }}>
          <div className="container__form__heading">Image</div>
          <InputBox variant="img-upload" placeholder="Sub-catagory" />
        </div>
      </div>
    </div>
  );
}

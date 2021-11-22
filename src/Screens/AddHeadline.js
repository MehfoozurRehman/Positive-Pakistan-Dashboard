import React from "react";
import InputBox from "../Components/InputBox";

export default function EditNews() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className="container">
      <div className="container__heading">Add Headline</div>
      <div className="container__form">
        <div className="container__form__left">
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
        <div
          className="container__form__right"
          style={{ maxWidth: "30%" }}
        ></div>
      </div>
    </div>
  );
}

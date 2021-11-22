import React from "react";
import InputBox from "../Components/InputBox";

export default function EditTopic() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className="container">
      <div className="container__heading">Edit Topic</div>
      <div className="container__form">
        <div className="container__form__left">
          <div className="container__form__heading">Title</div>
          <InputBox placeholder="Write something...." />
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

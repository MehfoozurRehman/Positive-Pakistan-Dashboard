import React from "react";
import InputBox from "../Components/InputBox";
import TableList from "../Components/TableList";

export default function NewSelection() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className="container">
      <div className="container__heading">News Selection</div>
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

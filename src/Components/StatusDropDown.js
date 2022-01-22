import React, { useEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

export default function StatusDropDown() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [statusData, setStatusData] = useState("Published");
  return (
    <>
      <OutsideClickHandler
        onOutsideClick={() => {
          setIsDropDownOpen(false);
        }}
      >
        <div className="container__content__table__content__list__entry__status__wrapper">
          <button
            onClick={() => {
              isDropDownOpen === false
                ? setIsDropDownOpen(true)
                : setIsDropDownOpen(false);
            }}
            className="container__content__table__content__list__entry__status"
          >
            {statusData}
          </button>
          {isDropDownOpen ? (
            <div className="container__content__table__content__list__entry__status__selection">
              <button
                className="container__content__table__content__list__entry__status__selection__entry"
                onClick={() => {
                  setStatusData("Published");
                  setIsDropDownOpen(false);
                }}
              >
                Published
              </button>
              <button
                className="container__content__table__content__list__entry__status__selection__entry"
                onClick={() => {
                  setStatusData("Un Published");
                  setIsDropDownOpen(false);
                }}
              >
                Un Published
              </button>
            </div>
          ) : null}
        </div>
      </OutsideClickHandler>
    </>
  );
}

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputBox from "../Components/InputBox";
import TableHeaderList from "../Components/TableHeaderList";
import TableInfoList from "../Components/TableInfoList";
import OutsideClickHandler from "react-outside-click-handler";

export default function NewsSelection() {
  const navigate = useNavigate();
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const tableHeaderEntryContainer = [
    { title: "Title", type: "title" },
    { title: "Author" },
    { title: "Status" },
    { title: "Date" },
    { title: "" },
  ];
  const tableInfoListContainer = [
    { title: "سندھ میں کیسز میں اضافہ ندھ میں کیسز میں اضافہ", type: "title" },
    { title: "John Doe" },
    { title: "Published" },
    { title: "12-3-21" },
    { type: "btn" },
  ];

  return (
    <div className="container">
      <div className="container__heading">News Selection</div>
      <div className="container__header">
        <div className="container__header__left">
          <InputBox
            placeholder="Search"
            style={{ minWidth: "200px" }}
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 22"
              >
                <g
                  id="_622669"
                  data-name="622669"
                  transform="translate(0 -0.003)"
                >
                  <g
                    id="Group_509"
                    data-name="Group 509"
                    transform="translate(0 0.003)"
                  >
                    <path
                      id="Path_755"
                      data-name="Path 755"
                      d="M21.731,20.438l-6.256-6.256a8.725,8.725,0,1,0-1.3,1.3l6.256,6.256a.917.917,0,1,0,1.3-1.3ZM8.708,15.586a6.875,6.875,0,1,1,6.875-6.875A6.882,6.882,0,0,1,8.708,15.586Z"
                      transform="translate(0 -0.003)"
                    />
                  </g>
                </g>
              </svg>
            }
          />
        </div>
        <div className="container__header__right">
          {/* <InputBox options={options} variant="select" placeholder="Status" /> */}
          <button
            onClick={() => {
              navigate("/dashboard/news-selection-edit");
            }}
            className="login__container__form__btn"
            style={{ minWidth: "120px", marginBottom: "1em" }}
          >
            Edit
          </button>
        </div>
      </div>
      <div className="container__content">
        <div className="container__content__table">
          <div className="container__sub__heading">Main News</div>
          <div className="container__content__table__header">
            <div
              className="container__content__table__header__entry"
              style={{ minWidth: "290px" }}
            >
              Title
            </div>
          </div>
          <div className="container__content__table__content">
            <div className="container__content__table__content__list">
              <div
                className="container__content__table__content__list__entry"
                style={{ minWidth: "290px" }}
              >
                سندھ میں کیسز میں اضافہ ندھ میں کیسز میں اضافہ سندھ میں کیسز میں
                اضافہ ندھ میں کیسز میں اضافہ
              </div>
            </div>
          </div>
          <div className="container__sub__heading">Trending News</div>
          <div className="container__content__table__header">
            <div
              className="container__content__table__header__entry"
              style={{ minWidth: "290px" }}
            >
              Title
            </div>
          </div>
          <div className="container__content__table__content">
            <div className="container__content__table__content__list">
              <div
                className="container__content__table__content__list__entry"
                style={{ minWidth: "290px" }}
              >
                سندھ میں کیسز میں اضافہ ندھ میں کیسز میں اضافہ سندھ میں کیسز میں
                اضافہ ندھ میں کیسز میں اضافہ
              </div>
            </div>
            <div className="container__content__table__content__list">
              <div
                className="container__content__table__content__list__entry"
                style={{ minWidth: "290px" }}
              >
                سندھ میں کیسز میں اضافہ ندھ میں کیسز میں اضافہ سندھ میں کیسز میں
                اضافہ ندھ میں کیسز میں اضافہ
              </div>
            </div>
          </div>
          <div className="container__sub__heading">Secondary News</div>
          <div className="container__content__table__header">
            <div
              className="container__content__table__header__entry"
              style={{ minWidth: "290px" }}
            >
              Title
            </div>
          </div>
          <div className="container__content__table__content">
            <div className="container__content__table__content__list">
              <div
                className="container__content__table__content__list__entry"
                style={{ minWidth: "290px" }}
              >
                سندھ میں کیسز میں اضافہ ندھ میں کیسز میں اضافہ سندھ میں کیسز میں
                اضافہ ندھ میں کیسز میں اضافہ
              </div>
            </div>
            <div className="container__content__table__content__list">
              <div
                className="container__content__table__content__list__entry"
                style={{ minWidth: "290px" }}
              >
                سندھ میں کیسز میں اضافہ ندھ میں کیسز میں اضافہ سندھ میں کیسز میں
                اضافہ ندھ میں کیسز میں اضافہ
              </div>
            </div>
            <div className="container__content__table__content__list">
              <div
                className="container__content__table__content__list__entry"
                style={{ minWidth: "290px" }}
              >
                سندھ میں کیسز میں اضافہ ندھ میں کیسز میں اضافہ سندھ میں کیسز میں
                اضافہ ندھ میں کیسز میں اضافہ
              </div>
            </div>
            <div className="container__content__table__content__list">
              <div
                className="container__content__table__content__list__entry"
                style={{ minWidth: "290px" }}
              >
                سندھ میں کیسز میں اضافہ ندھ میں کیسز میں اضافہ سندھ میں کیسز میں
                اضافہ ندھ میں کیسز میں اضافہ
              </div>
            </div>
            <div className="container__content__table__content__list">
              <div
                className="container__content__table__content__list__entry"
                style={{ minWidth: "290px" }}
              >
                سندھ میں کیسز میں اضافہ ندھ میں کیسز میں اضافہ سندھ میں کیسز میں
                اضافہ ندھ میں کیسز میں اضافہ
              </div>
            </div>
            <div className="container__content__table__content__list">
              <div
                className="container__content__table__content__list__entry"
                style={{ minWidth: "290px" }}
              >
                سندھ میں کیسز میں اضافہ ندھ میں کیسز میں اضافہ سندھ میں کیسز میں
                اضافہ ندھ میں کیسز میں اضافہ
              </div>
            </div>
            <div className="container__content__table__content__list">
              <div
                className="container__content__table__content__list__entry"
                style={{ minWidth: "290px" }}
              >
                سندھ میں کیسز میں اضافہ ندھ میں کیسز میں اضافہ سندھ میں کیسز میں
                اضافہ ندھ میں کیسز میں اضافہ
              </div>
            </div>
            <div className="container__content__table__content__list">
              <div
                className="container__content__table__content__list__entry"
                style={{ minWidth: "290px" }}
              >
                سندھ میں کیسز میں اضافہ ندھ میں کیسز میں اضافہ سندھ میں کیسز میں
                اضافہ ندھ میں کیسز میں اضافہ
              </div>
            </div>
            <div className="container__content__table__content__list">
              <div
                className="container__content__table__content__list__entry"
                style={{ minWidth: "290px" }}
              >
                سندھ میں کیسز میں اضافہ ندھ میں کیسز میں اضافہ سندھ میں کیسز میں
                اضافہ ندھ میں کیسز میں اضافہ
              </div>
            </div>
            <div className="container__content__table__content__list">
              <div
                className="container__content__table__content__list__entry"
                style={{ minWidth: "290px" }}
              >
                سندھ میں کیسز میں اضافہ ندھ میں کیسز میں اضافہ سندھ میں کیسز میں
                اضافہ ندھ میں کیسز میں اضافہ
              </div>
            </div>
            <div className="container__content__table__content__list">
              <div
                className="container__content__table__content__list__entry"
                style={{ minWidth: "290px" }}
              >
                سندھ میں کیسز میں اضافہ ندھ میں کیسز میں اضافہ سندھ میں کیسز میں
                اضافہ ندھ میں کیسز میں اضافہ
              </div>
            </div>
            <div className="container__content__table__content__list">
              <div
                className="container__content__table__content__list__entry"
                style={{ minWidth: "290px" }}
              >
                سندھ میں کیسز میں اضافہ ندھ میں کیسز میں اضافہ سندھ میں کیسز میں
                اضافہ ندھ میں کیسز میں اضافہ
              </div>
            </div>
            <div className="container__content__table__content__list">
              <div
                className="container__content__table__content__list__entry"
                style={{ minWidth: "290px" }}
              >
                سندھ میں کیسز میں اضافہ ندھ میں کیسز میں اضافہ سندھ میں کیسز میں
                اضافہ ندھ میں کیسز میں اضافہ
              </div>
            </div>
            <div className="container__content__table__content__list">
              <div
                className="container__content__table__content__list__entry"
                style={{ minWidth: "290px" }}
              >
                سندھ میں کیسز میں اضافہ ندھ میں کیسز میں اضافہ سندھ میں کیسز میں
                اضافہ ندھ میں کیسز میں اضافہ
              </div>
            </div>
            <div className="container__content__table__content__list">
              <div
                className="container__content__table__content__list__entry"
                style={{ minWidth: "290px" }}
              >
                سندھ میں کیسز میں اضافہ ندھ میں کیسز میں اضافہ سندھ میں کیسز میں
                اضافہ ندھ میں کیسز میں اضافہ
              </div>
            </div>
            <div className="container__content__table__content__list">
              <div
                className="container__content__table__content__list__entry"
                style={{ minWidth: "290px" }}
              >
                سندھ میں کیسز میں اضافہ ندھ میں کیسز میں اضافہ سندھ میں کیسز میں
                اضافہ ندھ میں کیسز میں اضافہ
              </div>
            </div>
            <div className="container__content__table__content__list">
              <div
                className="container__content__table__content__list__entry"
                style={{ minWidth: "290px" }}
              >
                سندھ میں کیسز میں اضافہ ندھ میں کیسز میں اضافہ سندھ میں کیسز میں
                اضافہ ندھ میں کیسز میں اضافہ
              </div>
            </div>
            <div className="container__content__table__content__list">
              <div
                className="container__content__table__content__list__entry"
                style={{ minWidth: "290px" }}
              >
                سندھ میں کیسز میں اضافہ ندھ میں کیسز میں اضافہ سندھ میں کیسز میں
                اضافہ ندھ میں کیسز میں اضافہ
              </div>
            </div>
            <div className="container__content__table__content__list">
              <div
                className="container__content__table__content__list__entry"
                style={{ minWidth: "290px" }}
              >
                سندھ میں کیسز میں اضافہ ندھ میں کیسز میں اضافہ سندھ میں کیسز میں
                اضافہ ندھ میں کیسز میں اضافہ
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

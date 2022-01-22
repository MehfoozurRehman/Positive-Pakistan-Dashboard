import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputBox from "../Components/InputBox";
import TableHeaderList from "../Components/TableHeaderList";
import TableInfoList from "../Components/TableInfoList";
import OutsideClickHandler from "react-outside-click-handler";
import StatusDropDown from "../Components/StatusDropDown";

export default function Headline() {
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
      <div className="container__heading">Headlines</div>
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
          <InputBox options={options} variant="select" placeholder="Status" />
          <button
            onClick={() => {
              navigate("/dashboard/headline-add");
            }}
            className="login__container__form__btn"
            style={{ minWidth: "120px", marginBottom: "1em" }}
          >
            Add
          </button>
        </div>
      </div>
      <div className="container__content">
        <div className="container__content__table">
          <div className="container__content__table__header">
            <div
              className="container__content__table__header__entry"
              style={{ minWidth: "290px" }}
            >
              Title
            </div>
            <div className="container__content__table__header__entry">
              Author
            </div>
            <div className="container__content__table__header__entry">
              Status
            </div>
            <div className="container__content__table__header__entry">Date</div>
            <div className="container__content__table__header__entry">
              Time Slot
            </div>
            <div className="container__content__table__header__entry"></div>
          </div>
          <div className="container__content__table__content">
            <div className="container__content__table__content__list">
              <div
                className="container__content__table__content__list__entry"
                style={{ minWidth: "290px" }}
              >
                سندھ میں کیسز میں اضافہ ندھ میں کیسز میں اضافہ
              </div>
              <div className="container__content__table__content__list__entry">
                John doe
              </div>
              <div className="container__content__table__content__list__entry">
                <StatusDropDown />
              </div>
              <div className="container__content__table__content__list__entry">
                12-10-2021
              </div>
              <div className="container__content__table__content__list__entry">
                12:30 - 9:05
              </div>
              <div className="container__content__table__content__list__entry">
                <Link
                  to="/dashboard/headline-add"
                  className="container__content__table__content__list__entry__btn"
                  style={{ marginRight: ".5em" }}
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
                    class="feather feather-edit"
                  >
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                </Link>
                <button className="container__content__table__content__list__entry__btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 21.252 27.308"
                  >
                    <g
                      id="Group_1038"
                      data-name="Group 1038"
                      transform="translate(-726.198 -43.964)"
                    >
                      <path
                        id="Path_12068"
                        data-name="Path 12068"
                        d="M740.663,43.964c.433.516.945.956,1.406,1.444.081.086.181.058.274.058,1.608,0,3.216.006,4.824,0,.216,0,.286.043.282.271-.014.844-.012,1.688,0,2.532,0,.2-.044.264-.258.264-2.5-.008-4.993-.005-7.489-.005q-6.609,0-13.218.006c-.239,0-.289-.063-.286-.291q.022-1.252,0-2.5c0-.228.066-.272.282-.271,1.6.01,3.2,0,4.8.009a.51.51,0,0,0,.415-.175c.421-.453.9-.855,1.292-1.333Z"
                        transform="translate(0)"
                        fill="#ce0707"
                      />
                      <path
                        id="Path_12069"
                        data-name="Path 12069"
                        d="M761.329,121.289c0,2.942.008,5.884,0,8.825a2.988,2.988,0,0,1-1.76,2.839,2.826,2.826,0,0,1-1.285.283q-6.066,0-12.131,0a3.035,3.035,0,0,1-3.042-2.909c-.006-.124-.005-.249-.005-.373q0-8.825-.007-17.65c0-.266.074-.313.323-.313q8.8.011,17.6,0c.251,0,.322.051.321.314C761.325,115.3,761.329,118.294,761.329,121.289Z"
                        transform="translate(-15.392 -61.965)"
                        fill="#ce0707"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
            <div className="container__content__table__content__list">
              <div
                className="container__content__table__content__list__entry"
                style={{ minWidth: "290px" }}
              >
                سندھ میں کیسز میں اضافہ ندھ میں کیسز میں اضافہ
              </div>
              <div className="container__content__table__content__list__entry">
                John doe
              </div>
              <div className="container__content__table__content__list__entry">
                <StatusDropDown />
              </div>
              <div className="container__content__table__content__list__entry">
                12-10-2021
              </div>
              <div className="container__content__table__content__list__entry">
                12:30 - 9:05
              </div>
              <div className="container__content__table__content__list__entry">
                <Link
                  to="/dashboard/headline-add"
                  className="container__content__table__content__list__entry__btn"
                  style={{ marginRight: ".5em" }}
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
                    class="feather feather-edit"
                  >
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                </Link>
                <button className="container__content__table__content__list__entry__btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 21.252 27.308"
                  >
                    <g
                      id="Group_1038"
                      data-name="Group 1038"
                      transform="translate(-726.198 -43.964)"
                    >
                      <path
                        id="Path_12068"
                        data-name="Path 12068"
                        d="M740.663,43.964c.433.516.945.956,1.406,1.444.081.086.181.058.274.058,1.608,0,3.216.006,4.824,0,.216,0,.286.043.282.271-.014.844-.012,1.688,0,2.532,0,.2-.044.264-.258.264-2.5-.008-4.993-.005-7.489-.005q-6.609,0-13.218.006c-.239,0-.289-.063-.286-.291q.022-1.252,0-2.5c0-.228.066-.272.282-.271,1.6.01,3.2,0,4.8.009a.51.51,0,0,0,.415-.175c.421-.453.9-.855,1.292-1.333Z"
                        transform="translate(0)"
                        fill="#ce0707"
                      />
                      <path
                        id="Path_12069"
                        data-name="Path 12069"
                        d="M761.329,121.289c0,2.942.008,5.884,0,8.825a2.988,2.988,0,0,1-1.76,2.839,2.826,2.826,0,0,1-1.285.283q-6.066,0-12.131,0a3.035,3.035,0,0,1-3.042-2.909c-.006-.124-.005-.249-.005-.373q0-8.825-.007-17.65c0-.266.074-.313.323-.313q8.8.011,17.6,0c.251,0,.322.051.321.314C761.325,115.3,761.329,118.294,761.329,121.289Z"
                        transform="translate(-15.392 -61.965)"
                        fill="#ce0707"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
            <div className="container__content__table__content__list">
              <div
                className="container__content__table__content__list__entry"
                style={{ minWidth: "290px" }}
              >
                سندھ میں کیسز میں اضافہ ندھ میں کیسز میں اضافہ
              </div>
              <div className="container__content__table__content__list__entry">
                John doe
              </div>
              <div className="container__content__table__content__list__entry">
                <StatusDropDown />
              </div>
              <div className="container__content__table__content__list__entry">
                12-10-2021
              </div>
              <div className="container__content__table__content__list__entry">
                12:30 - 9:05
              </div>
              <div className="container__content__table__content__list__entry">
                <Link
                  to="/dashboard/headline-add"
                  className="container__content__table__content__list__entry__btn"
                  style={{ marginRight: ".5em" }}
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
                    class="feather feather-edit"
                  >
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                </Link>
                <button className="container__content__table__content__list__entry__btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 21.252 27.308"
                  >
                    <g
                      id="Group_1038"
                      data-name="Group 1038"
                      transform="translate(-726.198 -43.964)"
                    >
                      <path
                        id="Path_12068"
                        data-name="Path 12068"
                        d="M740.663,43.964c.433.516.945.956,1.406,1.444.081.086.181.058.274.058,1.608,0,3.216.006,4.824,0,.216,0,.286.043.282.271-.014.844-.012,1.688,0,2.532,0,.2-.044.264-.258.264-2.5-.008-4.993-.005-7.489-.005q-6.609,0-13.218.006c-.239,0-.289-.063-.286-.291q.022-1.252,0-2.5c0-.228.066-.272.282-.271,1.6.01,3.2,0,4.8.009a.51.51,0,0,0,.415-.175c.421-.453.9-.855,1.292-1.333Z"
                        transform="translate(0)"
                        fill="#ce0707"
                      />
                      <path
                        id="Path_12069"
                        data-name="Path 12069"
                        d="M761.329,121.289c0,2.942.008,5.884,0,8.825a2.988,2.988,0,0,1-1.76,2.839,2.826,2.826,0,0,1-1.285.283q-6.066,0-12.131,0a3.035,3.035,0,0,1-3.042-2.909c-.006-.124-.005-.249-.005-.373q0-8.825-.007-17.65c0-.266.074-.313.323-.313q8.8.011,17.6,0c.251,0,.322.051.321.314C761.325,115.3,761.329,118.294,761.329,121.289Z"
                        transform="translate(-15.392 -61.965)"
                        fill="#ce0707"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
            <div className="container__content__table__content__list">
              <div
                className="container__content__table__content__list__entry"
                style={{ minWidth: "290px" }}
              >
                سندھ میں کیسز میں اضافہ ندھ میں کیسز میں اضافہ
              </div>
              <div className="container__content__table__content__list__entry">
                John doe
              </div>
              <div className="container__content__table__content__list__entry">
                <StatusDropDown />
              </div>
              <div className="container__content__table__content__list__entry">
                12-10-2021
              </div>
              <div className="container__content__table__content__list__entry">
                12:30 - 9:05
              </div>
              <div className="container__content__table__content__list__entry">
                <Link
                  to="/dashboard/headline-add"
                  className="container__content__table__content__list__entry__btn"
                  style={{ marginRight: ".5em" }}
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
                    class="feather feather-edit"
                  >
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                </Link>
                <button className="container__content__table__content__list__entry__btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 21.252 27.308"
                  >
                    <g
                      id="Group_1038"
                      data-name="Group 1038"
                      transform="translate(-726.198 -43.964)"
                    >
                      <path
                        id="Path_12068"
                        data-name="Path 12068"
                        d="M740.663,43.964c.433.516.945.956,1.406,1.444.081.086.181.058.274.058,1.608,0,3.216.006,4.824,0,.216,0,.286.043.282.271-.014.844-.012,1.688,0,2.532,0,.2-.044.264-.258.264-2.5-.008-4.993-.005-7.489-.005q-6.609,0-13.218.006c-.239,0-.289-.063-.286-.291q.022-1.252,0-2.5c0-.228.066-.272.282-.271,1.6.01,3.2,0,4.8.009a.51.51,0,0,0,.415-.175c.421-.453.9-.855,1.292-1.333Z"
                        transform="translate(0)"
                        fill="#ce0707"
                      />
                      <path
                        id="Path_12069"
                        data-name="Path 12069"
                        d="M761.329,121.289c0,2.942.008,5.884,0,8.825a2.988,2.988,0,0,1-1.76,2.839,2.826,2.826,0,0,1-1.285.283q-6.066,0-12.131,0a3.035,3.035,0,0,1-3.042-2.909c-.006-.124-.005-.249-.005-.373q0-8.825-.007-17.65c0-.266.074-.313.323-.313q8.8.011,17.6,0c.251,0,.322.051.321.314C761.325,115.3,761.329,118.294,761.329,121.289Z"
                        transform="translate(-15.392 -61.965)"
                        fill="#ce0707"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
            <div className="container__content__table__content__list">
              <div
                className="container__content__table__content__list__entry"
                style={{ minWidth: "290px" }}
              >
                سندھ میں کیسز میں اضافہ ندھ میں کیسز میں اضافہ
              </div>
              <div className="container__content__table__content__list__entry">
                John doe
              </div>
              <div className="container__content__table__content__list__entry">
                <StatusDropDown />
              </div>
              <div className="container__content__table__content__list__entry">
                12-10-2021
              </div>
              <div className="container__content__table__content__list__entry">
                12:30 - 9:05
              </div>
              <div className="container__content__table__content__list__entry">
                <Link
                  to="/dashboard/headline-add"
                  className="container__content__table__content__list__entry__btn"
                  style={{ marginRight: ".5em" }}
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
                    class="feather feather-edit"
                  >
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                </Link>
                <button className="container__content__table__content__list__entry__btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 21.252 27.308"
                  >
                    <g
                      id="Group_1038"
                      data-name="Group 1038"
                      transform="translate(-726.198 -43.964)"
                    >
                      <path
                        id="Path_12068"
                        data-name="Path 12068"
                        d="M740.663,43.964c.433.516.945.956,1.406,1.444.081.086.181.058.274.058,1.608,0,3.216.006,4.824,0,.216,0,.286.043.282.271-.014.844-.012,1.688,0,2.532,0,.2-.044.264-.258.264-2.5-.008-4.993-.005-7.489-.005q-6.609,0-13.218.006c-.239,0-.289-.063-.286-.291q.022-1.252,0-2.5c0-.228.066-.272.282-.271,1.6.01,3.2,0,4.8.009a.51.51,0,0,0,.415-.175c.421-.453.9-.855,1.292-1.333Z"
                        transform="translate(0)"
                        fill="#ce0707"
                      />
                      <path
                        id="Path_12069"
                        data-name="Path 12069"
                        d="M761.329,121.289c0,2.942.008,5.884,0,8.825a2.988,2.988,0,0,1-1.76,2.839,2.826,2.826,0,0,1-1.285.283q-6.066,0-12.131,0a3.035,3.035,0,0,1-3.042-2.909c-.006-.124-.005-.249-.005-.373q0-8.825-.007-17.65c0-.266.074-.313.323-.313q8.8.011,17.6,0c.251,0,.322.051.321.314C761.325,115.3,761.329,118.294,761.329,121.289Z"
                        transform="translate(-15.392 -61.965)"
                        fill="#ce0707"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
            <div className="container__content__table__content__list">
              <div
                className="container__content__table__content__list__entry"
                style={{ minWidth: "290px" }}
              >
                سندھ میں کیسز میں اضافہ ندھ میں کیسز میں اضافہ
              </div>
              <div className="container__content__table__content__list__entry">
                John doe
              </div>
              <div className="container__content__table__content__list__entry">
                <StatusDropDown />
              </div>
              <div className="container__content__table__content__list__entry">
                12-10-2021
              </div>
              <div className="container__content__table__content__list__entry">
                12:30 - 9:05
              </div>
              <div className="container__content__table__content__list__entry">
                <Link
                  to="/dashboard/headline-add"
                  className="container__content__table__content__list__entry__btn"
                  style={{ marginRight: ".5em" }}
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
                    class="feather feather-edit"
                  >
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                </Link>
                <button className="container__content__table__content__list__entry__btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 21.252 27.308"
                  >
                    <g
                      id="Group_1038"
                      data-name="Group 1038"
                      transform="translate(-726.198 -43.964)"
                    >
                      <path
                        id="Path_12068"
                        data-name="Path 12068"
                        d="M740.663,43.964c.433.516.945.956,1.406,1.444.081.086.181.058.274.058,1.608,0,3.216.006,4.824,0,.216,0,.286.043.282.271-.014.844-.012,1.688,0,2.532,0,.2-.044.264-.258.264-2.5-.008-4.993-.005-7.489-.005q-6.609,0-13.218.006c-.239,0-.289-.063-.286-.291q.022-1.252,0-2.5c0-.228.066-.272.282-.271,1.6.01,3.2,0,4.8.009a.51.51,0,0,0,.415-.175c.421-.453.9-.855,1.292-1.333Z"
                        transform="translate(0)"
                        fill="#ce0707"
                      />
                      <path
                        id="Path_12069"
                        data-name="Path 12069"
                        d="M761.329,121.289c0,2.942.008,5.884,0,8.825a2.988,2.988,0,0,1-1.76,2.839,2.826,2.826,0,0,1-1.285.283q-6.066,0-12.131,0a3.035,3.035,0,0,1-3.042-2.909c-.006-.124-.005-.249-.005-.373q0-8.825-.007-17.65c0-.266.074-.313.323-.313q8.8.011,17.6,0c.251,0,.322.051.321.314C761.325,115.3,761.329,118.294,761.329,121.289Z"
                        transform="translate(-15.392 -61.965)"
                        fill="#ce0707"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
            <div className="container__content__table__content__list">
              <div
                className="container__content__table__content__list__entry"
                style={{ minWidth: "290px" }}
              >
                سندھ میں کیسز میں اضافہ ندھ میں کیسز میں اضافہ
              </div>
              <div className="container__content__table__content__list__entry">
                John doe
              </div>
              <div className="container__content__table__content__list__entry">
                <StatusDropDown />
              </div>
              <div className="container__content__table__content__list__entry">
                12-10-2021
              </div>
              <div className="container__content__table__content__list__entry">
                12:30 - 9:05
              </div>
              <div className="container__content__table__content__list__entry">
                <Link
                  to="/dashboard/headline-add"
                  className="container__content__table__content__list__entry__btn"
                  style={{ marginRight: ".5em" }}
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
                    class="feather feather-edit"
                  >
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                </Link>
                <button className="container__content__table__content__list__entry__btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 21.252 27.308"
                  >
                    <g
                      id="Group_1038"
                      data-name="Group 1038"
                      transform="translate(-726.198 -43.964)"
                    >
                      <path
                        id="Path_12068"
                        data-name="Path 12068"
                        d="M740.663,43.964c.433.516.945.956,1.406,1.444.081.086.181.058.274.058,1.608,0,3.216.006,4.824,0,.216,0,.286.043.282.271-.014.844-.012,1.688,0,2.532,0,.2-.044.264-.258.264-2.5-.008-4.993-.005-7.489-.005q-6.609,0-13.218.006c-.239,0-.289-.063-.286-.291q.022-1.252,0-2.5c0-.228.066-.272.282-.271,1.6.01,3.2,0,4.8.009a.51.51,0,0,0,.415-.175c.421-.453.9-.855,1.292-1.333Z"
                        transform="translate(0)"
                        fill="#ce0707"
                      />
                      <path
                        id="Path_12069"
                        data-name="Path 12069"
                        d="M761.329,121.289c0,2.942.008,5.884,0,8.825a2.988,2.988,0,0,1-1.76,2.839,2.826,2.826,0,0,1-1.285.283q-6.066,0-12.131,0a3.035,3.035,0,0,1-3.042-2.909c-.006-.124-.005-.249-.005-.373q0-8.825-.007-17.65c0-.266.074-.313.323-.313q8.8.011,17.6,0c.251,0,.322.051.321.314C761.325,115.3,761.329,118.294,761.329,121.289Z"
                        transform="translate(-15.392 -61.965)"
                        fill="#ce0707"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

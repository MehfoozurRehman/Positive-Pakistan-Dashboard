import React from "react";
import InputBox from "../Components/InputBox";

function TableList() {
  return (
    <div className="container__content__table__content__list">
      <div
        className="container__content__table__content__list__entry"
        style={{ minWidth: "247px" }}
      >
        سندھ میں کیسز میں اضافہ
      </div>
      <div className="container__content__table__content__list__entry">
        Hammad
      </div>
      <div className="container__content__table__content__list__entry">
        Pakistan
      </div>
      <div className="container__content__table__content__list__entry">
        Lahore
      </div>
      <div className="container__content__table__content__list__entry">
        Published
      </div>
      <div className="container__content__table__content__list__entry">
        12/08/2020
      </div>
      <div className="container__content__table__content__list__entry">
        <button className="container__content__table__content__list__entry__btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.252 27.308">
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
  );
}

export default function Headline() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
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
          <InputBox options={options} variant="select" placeholder="Catagory" />
          <InputBox
            options={options}
            variant="select"
            placeholder="Sub-catagory"
          />
          <InputBox options={options} variant="select" placeholder="Status" />
          <button
            className="login__container__form__btn"
            style={{ maxWidth: "150px" }}
          >
            Apply
          </button>
        </div>
      </div>
      <div className="container__content">
        <div className="container__content__table">
          <div className="container__content__table__header">
            <div
              className="container__content__table__header__entry"
              style={{ minWidth: "250px" }}
            >
              Title
            </div>
            <div className="container__content__table__header__entry">
              Author
            </div>
            <div className="container__content__table__header__entry">
              Catagory
            </div>
            <div className="container__content__table__header__entry">
              Sub Catagory
            </div>
            <div className="container__content__table__header__entry">
              Status
            </div>
            <div className="container__content__table__header__entry">Date</div>
            <div className="container__content__table__header__entry">
              Delete
            </div>
          </div>

          <div className="container__content__table__content">
            <TableList />
            <TableList />
            <TableList />
            <TableList />
            <TableList />
            <TableList />
            <TableList />
            <TableList />
            <TableList />
            <TableList />
            <TableList />
            <TableList />
            <TableList />
            <TableList />
            <TableList />
            <TableList />
            <TableList />
            <TableList />
            <TableList />
            <TableList />
            <TableList />
            <TableList />
            <TableList />
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import InputBox from "../Components/InputBox";
import TableList from "../Components/TableList";

export default function Catagory() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className="container">
      <div className="container__heading">Category</div>
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

import React from "react";
import { Link } from "react-router-dom";
import CatagoryPic from "../Assets/CatagoryPic.png";

function TableInfoEntry({ title, type }) {
  if (type === "title") {
    return (
      <div
        className="container__content__table__content__list__entry"
        style={{ minWidth: "290px" }}
      >
        {title}
      </div>
    );
  } else if (type === "message") {
    return (
      <div className="container__content__table__content__list__entry">
        <div className="container__content__table__content__list__entry__display__message">
          View Message
          <div className="container__content__table__content__list__entry__message__detail">
            lorem ipsm lorem ipsm lorem ipsm lorem ipsm lorem ipsm lorem ipsm
            lorem ipsm lorem ipsm
          </div>
        </div>
      </div>
    );
  } else if (type === "img") {
    return (
      <div className="container__content__table__content__list__entry">
        <img
          src={CatagoryPic}
          alt="CatagoryPic"
          className="container__content__table__content__list__entry__pic"
        />
      </div>
    );
  } else {
    return (
      <div className="container__content__table__content__list__entry">
        {title}
      </div>
    );
  }
}
export default function TableInfoList({ tableInfoListContainer }) {
  return (
    <Link to="" className="container__content__table__content__list">
      {tableInfoListContainer.map((item) => (
        <TableInfoEntry
          title={item.title}
          type={
            item.type === "title"
              ? "title"
              : item.type === "btn"
              ? "btn"
              : item.type === "img"
              ? "img"
              : item.type === "message"
              ? "message"
              : null
          }
        />
      ))}
    </Link>
  );
}

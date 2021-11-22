import React from "react";

function TableHeaderEntry({ title, type }) {
  if (type === "title") {
    return (
      <div
        className="container__content__table__header__entry"
        style={{ minWidth: "247px" }}
      >
        {title}
      </div>
    );
  } else {
    return (
      <div className="container__content__table__header__entry">{title}</div>
    );
  }
}

export default function TableHeaderList({ tableHeaderEntryContainer }) {
  return (
    <div className="container__content__table__header">
      {tableHeaderEntryContainer.map((item) => (
        <TableHeaderEntry title={item.title} type={item.type} />
      ))}
    </div>
  );
}

import React from "react";

export default function UserByStats({
  labal,
  value,
  valueByPercentage,
  stroke,
}) {
  return (
    <div className="user__by__card__left__stats__entry">
      <div className="user__by__card__left__stats__entry__header">
        <div className="user__by__card__left__stats__entry__header__heading">
          {labal}
        </div>
        <div className="user__by__card__left__stats__entry__header__value">
          {value}
        </div>
      </div>
      <div className="user__by__card__left__stats__entry__bar">
        <div
          className="user__by__card__left__stats__entry__bar__filled"
          style={{ minWidth: valueByPercentage, backgroundColor: stroke }}
        ></div>
      </div>
    </div>
  );
}

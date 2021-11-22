import React from "react";
import StatisticsCardChart from "./StatisticsCardChart";
import newsPic from "../Assets/newsPic.png";

export default function MostViewedNewsCardTableList() {
  return (
    <div className="most__viewed__news__card__table__content__list">
      <div className="most__viewed__news__card__table__content__list__entry">
        <img
          src={newsPic}
          alt="newsPic"
          className="most__viewed__news__card__table__content__list__entry__img"
        />
      </div>
      <div className="most__viewed__news__card__table__content__list__entry">
        سندھ میں کیسز میں اضافہ
      </div>
      <div
        className="most__viewed__news__card__table__content__list__entry"
        style={{ maxWidth: "88px" }}
      >
        5
      </div>
      <div
        className="most__viewed__news__card__table__content__list__entry"
        style={{ maxWidth: "88px" }}
      >
        1200
      </div>
      <div className="most__viewed__news__card__table__content__list__entry">
        <StatisticsCardChart stroke="#6F42C1" fill="rgba(111,66,193,.5)" />
      </div>
    </div>
  );
}

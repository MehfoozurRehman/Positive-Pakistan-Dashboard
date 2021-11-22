import React from "react";
import MostViewedNewsCardTableList from "./MostViewedNewsCardTableList";

export default function MostViewedNewsCard() {
  return (
    <div className="most__viewed__news__card">
      <div className="most__viewed__news__card__header">Most Viewed News</div>
      <div className="most__viewed__news__card__table__header">
        <div className="most__viewed__news__card__table__header__entry">
          Image
        </div>
        <div className="most__viewed__news__card__table__header__entry">
          Topic
        </div>
        <div
          className="most__viewed__news__card__table__header__entry"
          style={{ maxWidth: "90px" }}
        >
          Days
        </div>
        <div
          className="most__viewed__news__card__table__header__entry"
          style={{ maxWidth: "90px" }}
        >
          Views
        </div>
        <div className="most__viewed__news__card__table__header__entry">
          Graph
        </div>
      </div>
      <div className="most__viewed__news__card__table__content">
        <MostViewedNewsCardTableList />
        <MostViewedNewsCardTableList />
        <MostViewedNewsCardTableList />
        <MostViewedNewsCardTableList />
        <MostViewedNewsCardTableList />
        <MostViewedNewsCardTableList />
        <MostViewedNewsCardTableList />
        <MostViewedNewsCardTableList />
        <MostViewedNewsCardTableList />
        <MostViewedNewsCardTableList />
        <MostViewedNewsCardTableList />
        <MostViewedNewsCardTableList />
        <MostViewedNewsCardTableList />
        <MostViewedNewsCardTableList />
        <MostViewedNewsCardTableList />
        <MostViewedNewsCardTableList />
        <MostViewedNewsCardTableList />
        <MostViewedNewsCardTableList />
        <MostViewedNewsCardTableList />
        <MostViewedNewsCardTableList />
      </div>
    </div>
  );
}

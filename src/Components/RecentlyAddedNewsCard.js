import React from "react";
import RecentlyAddedNewsCardTableList from "./RecentlyAddedNewsCardTableList";

export default function RecentlyAddedNewsCard() {
  return (
    <div className="recently__added__news__card">
      <div className="most__viewed__news__card__header">
        Recently Added News
      </div>
      <div className="most__viewed__news__card__table__header">
        <div className="most__viewed__news__card__table__header__entry">
          Image
        </div>
        <div className="most__viewed__news__card__table__header__entry">
          Topic
        </div>
        <div className="most__viewed__news__card__table__header__entry">
          Graph
        </div>
      </div>
      <div className="most__viewed__news__card__table__content">
        <RecentlyAddedNewsCardTableList />
        <RecentlyAddedNewsCardTableList />
        <RecentlyAddedNewsCardTableList />
        <RecentlyAddedNewsCardTableList />
        <RecentlyAddedNewsCardTableList />
        <RecentlyAddedNewsCardTableList />
        <RecentlyAddedNewsCardTableList />
        <RecentlyAddedNewsCardTableList />
        <RecentlyAddedNewsCardTableList />
        <RecentlyAddedNewsCardTableList />
        <RecentlyAddedNewsCardTableList />
        <RecentlyAddedNewsCardTableList />
        <RecentlyAddedNewsCardTableList />
        <RecentlyAddedNewsCardTableList />
        <RecentlyAddedNewsCardTableList />
        <RecentlyAddedNewsCardTableList />
        <RecentlyAddedNewsCardTableList />
        <RecentlyAddedNewsCardTableList />
        <RecentlyAddedNewsCardTableList />
        <RecentlyAddedNewsCardTableList />
        <RecentlyAddedNewsCardTableList />
        <RecentlyAddedNewsCardTableList />
      </div>
    </div>
  );
}

import React from "react";
import UserStatisticsChart from "./UserStatisticsChart";
import UserFrom from "./UserFrom";

export default function UserStatisticsCard() {
  return (
    <div className="user__statistics__card">
      <div className="user__statistics__card__header">
        <div className="user__statistics__card__header__heading">
          User From sites
        </div>
        <div className="user__statistics__card__header__date">
          15 April - 15 May
        </div>
      </div>
      <div className="user__statistics__card__content">
        <div className="user__statistics__card__content__left">
          <UserStatisticsChart />
        </div>
        <div className="user__statistics__card__content__right">
          <UserFrom stroke="#6F42C1" label="Facebook" />
          <UserFrom stroke="#0780FE" label="Instagram" />
          <UserFrom stroke="#F10075" label="Youtube" />
          <UserFrom stroke="#01CCCC" label="Google" />
        </div>
      </div>
    </div>
  );
}

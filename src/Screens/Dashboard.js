import React from "react";
import StatisticsCardChart from "../Components/StatisticsCardChart";
import UserStatisticsChart from "../Components/UserStatisticsChart";

function StatisticsCard({ stroke, fill }) {
  return (
    <div className="statistics__card">
      <div className="statistics__card__top">
        <div
          className="statistics__card__top__avatar"
          style={{ backgroundColor: stroke }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18.128"
            height="18.37"
            fill="currentColor"
            viewBox="0 0 18.128 18.37"
          >
            <path
              id="Icon_material-person-outline"
              data-name="Icon material-person-outline"
              d="M15.064,8.181a2.411,2.411,0,1,1-2.379,2.411,2.4,2.4,0,0,1,2.379-2.411m0,10.333c3.365,0,6.911,1.676,6.911,2.411v1.263H8.153V20.925c0-.735,3.546-2.411,6.911-2.411M15.064,6A4.593,4.593,0,1,0,19.6,10.592,4.561,4.561,0,0,0,15.064,6Zm0,10.333C12.039,16.333,6,17.871,6,20.925V24.37H24.128V20.925C24.128,17.871,18.089,16.333,15.064,16.333Z"
              transform="translate(-6 -6)"
            />
          </svg>
        </div>
        <div className="statistics__card__top__content">
          <div className="statistics__card__top__content__top">2,476</div>
          <div className="statistics__card__top__content__bottom">
            Page View
          </div>
        </div>
      </div>
      <div className="statistics__card__bottom">
        <StatisticsCardChart stroke={stroke} fill={fill} />
      </div>
    </div>
  );
}

function UserFrom({ stroke, label }) {
  return (
    <div className="user__statistics__card__content__right__from">
      <div
        className="user__statistics__card__content__right__from__dot"
        style={{ backgroundColor: stroke }}
      ></div>
      {label}
    </div>
  );
}

function UserStatisticsCard() {
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

export default function Dashboard() {
  return (
    <div className="dashboard__container">
      <div className="dashboard__container__top">
        <StatisticsCard stroke="#6610F2" fill="rgba(111,66,193,.5)" />
        <StatisticsCard stroke="#6610F2" fill="rgba(111,66,193,.5)" />
        <StatisticsCard stroke="#6610F2" fill="rgba(111,66,193,.5)" />
        <StatisticsCard stroke="#6610F2" fill="rgba(111,66,193,.5)" />
      </div>
      <div className="dashboard__container__middle">
        <UserStatisticsCard />
      </div>
      <div className="dashboard__container__bottom"></div>
    </div>
  );
}

import React from "react";
import StatisticsCard from "../Components/StatisticsCard";
import UserByCard from "../Components/UserByCard";
import UserStatisticsCard from "../Components/UserStatisticsCard";
import MostViewedNewsCard from "../Components/MostViewedNewsCard";
import RecentlyAddedNewsCard from "../Components/RecentlyAddedNewsCard";

export default function Dashboard() {
  return (
    <div className="dashboard__container">
      <div className="dashboard__container__top">
        <StatisticsCard stroke="#6610F2" fill="rgba(111,66,193,.5)" />
        <StatisticsCard stroke="#0780FE" fill="rgba(7,128,254,.5)" />
        <StatisticsCard stroke="#F10075" fill="rgba(241,0,117,.5)" />
        <StatisticsCard stroke="#01CCCC" fill="rgba(1,204,204,.5)" />
      </div>
      <div className="dashboard__container__middle">
        <UserByCard />
        <UserStatisticsCard />
      </div>
      <div className="dashboard__container__bottom">
        <MostViewedNewsCard />
        <RecentlyAddedNewsCard />
      </div>
    </div>
  );
}

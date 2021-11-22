import React from "react";
import UserByStats from "./UserByStats";
import map from "../Assets/map.png";

export default function UserByCard() {
  return (
    <div className="user__by__card">
      <div className="user__by__card__left">
        <div className="user__by__card__left__heading">Users By City</div>
        <div className="user__by__card__left__info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In maxime
          placeat obcaecati dignissimos vel veniam? Atque modi amet vel iusto!
        </div>
        <div className="user__by__card__left__stats">
          <UserByStats
            labal="Punjab"
            value="12,000"
            valueByPercentage="65%"
            stroke="#6F42C1"
          />
          <UserByStats
            labal="Sindh"
            value="12,000"
            valueByPercentage="25%"
            stroke="#0780FE"
          />
          <UserByStats
            labal="KPK"
            value="12,000"
            valueByPercentage="55%"
            stroke="#F10075"
          />
          <UserByStats
            labal="Balochistan"
            value="12,000"
            valueByPercentage="88%"
            stroke="#01CCCC"
          />
        </div>
      </div>
      <img src={map} alt="map" className="user__by__card__right" />
    </div>
  );
}

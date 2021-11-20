import React from "react";
import { useNavigate } from "react-router-dom";

function SidebarLink({ label, defaultChecked, path }) {
  const navigate = useNavigate();
  return (
    <div className="sidebar__link">
      <input
        type="radio"
        name="sidebar__link__input"
        className="sidebar__link__input"
        defaultChecked={defaultChecked}
        onChange={() => {
          navigate(path);
        }}
      />
      <div className="sidebar__link__content">
        <svg
          id="dashboard"
          xmlns="http://www.w3.org/2000/svg"
          width="25.29"
          height="18.546"
          fill="currentColor"
          viewBox="0 0 25.29 18.546"
        >
          <path
            id="Path_11"
            data-name="Path 11"
            d="M1096.912,1517.736h11.8v-8.43h-11.8Zm1.953-6.243h7.9v4.055h-7.9Z"
            transform="translate(-1083.424 -1499.19)"
          />
          <path
            id="Path_22"
            data-name="Path 22"
            d="M1096.912,1517.736h11.8v-8.43h-11.8Zm1.953-6.243h7.9v4.055h-7.9Z"
            transform="translate(-1096.912 -1499.19)"
          />
          <path
            id="Path_20"
            data-name="Path 20"
            d="M1096.912,1517.736h11.8v-8.43h-11.8Zm1.953-6.243h7.9v4.055h-7.9Z"
            transform="translate(-1083.424 -1509.306)"
          />
          <path
            id="Path_21"
            data-name="Path 21"
            d="M1096.912,1517.736h11.8v-8.43h-11.8Zm1.953-6.243h7.9v4.055h-7.9Z"
            transform="translate(-1096.912 -1509.306)"
          />
        </svg>
        {label}
      </div>
    </div>
  );
}
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__links">
        <SidebarLink
          label="Dashboard"
          path="/dashboard"
          defaultChecked={true}
        />
        <SidebarLink
          label="Dashboard"
          path="/dashboard/headline"
          defaultChecked={false}
        />
        <SidebarLink
          label="Dashboard"
          path="/dashboard/news"
          defaultChecked={false}
        />
        <SidebarLink
          label="Dashboard"
          path="/dashboard/news-selection"
          defaultChecked={false}
        />
        <SidebarLink
          label="Dashboard"
          path="/dashboard/topics"
          defaultChecked={false}
        />
        <SidebarLink
          label="Dashboard"
          path="/dashboard/category"
          defaultChecked={false}
        />
        <SidebarLink
          label="Dashboard"
          path="/dashboard/contact"
          defaultChecked={false}
        />
      </div>
      <div className="sidebar__btn">
        <SidebarLink label="Logout" path="/" />
      </div>
    </div>
  );
}

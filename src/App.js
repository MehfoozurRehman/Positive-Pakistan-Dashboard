import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Category from "./Screens/Category";
import Contact from "./Screens/Contact";
import Dashboard from "./Screens/Dashboard";
import Headline from "./Screens/Headline";
import Login from "./Screens/Login";
import News from "./Screens/News";
import NewsSelection from "./Screens/NewsSelection";
import Topics from "./Screens/Topics";

function Main() {
  return (
    <div className="main">
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Main />}>
          <Route path="" element={<Dashboard />} />
          <Route path="headline" element={<Headline />} />
          <Route path="news" element={<News />} />
          <Route path="news-selection" element={<NewsSelection />} />
          <Route path="topics" element={<Topics />} />
          <Route path="catagory" element={<Category />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

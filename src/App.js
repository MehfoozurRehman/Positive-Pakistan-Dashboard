import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Category from "./Screens/Category";
import Contact from "./Screens/Contact";
import Dashboard from "./Screens/Dashboard";
import EditNews from "./Screens/EditNews";
import AddNews from "./Screens/AddNews";
import Headline from "./Screens/Headline";
import AddHeadline from "./Screens/AddHeadline";
import EditHeadline from "./Screens/EditHeadline";
import AddCategory from "./Screens/AddCategory";
import EditCategory from "./Screens/EditCategory";
import AddTopic from "./Screens/AddTopic";
import EditTopic from "./Screens/EditTopic";
import Login from "./Screens/Login";
import News from "./Screens/News";
import NewsSelection from "./Screens/NewsSelection";
import SubCategory from "./Screens/SubCategory";
import Topics from "./Screens/Topics";
import AddSubCategory from "./Screens/AddSubCategory";
import EditSubCategory from "./Screens/EditSubCategory";
import EditNewsSelection from "./Screens/EditNewsSelection";
import Profile from "./Screens/Profile";

function Main() {
  return (
    <div className="main">
      <Header />
      <div className="main__container">
        <Sidebar />
        <Outlet />
      </div>
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
          <Route path="headline-add" element={<AddHeadline />} />
          <Route path="headline-edit" element={<EditHeadline />} />
          <Route path="news" element={<News />} />
          <Route path="news-add" element={<AddNews />} />
          <Route path="news-edit" element={<EditNews />} />
          <Route path="news-selection" element={<NewsSelection />} />
          <Route path="news-selection-edit" element={<EditNewsSelection />} />
          <Route path="topics" element={<Topics />} />
          <Route path="topic-add" element={<AddTopic />} />
          <Route path="topic-edit" element={<EditTopic />} />
          <Route path="category" element={<Category />} />
          <Route path="category-add" element={<AddCategory />} />
          <Route path="category-edit" element={<EditCategory />} />
          <Route path="sub-category" element={<SubCategory />} />
          <Route path="sub-category-add" element={<AddSubCategory />} />
          <Route path="sub-category-edit" element={<EditSubCategory />} />
          <Route path="contact" element={<Contact />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

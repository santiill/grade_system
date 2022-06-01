import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import s from "./Sidebar.module.css";

export const logout = () => {
  localStorage.clear("token");
  window.location.reload();
};

const SidebarStudent = () => {
  return (
    <div className={s.sidebar_container}>
      <NavLink
        className={({ isActive }) => (isActive ? s.activeL : s.sidebar_item)}
        to="/*"
      >
        Grades List
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? s.activeL : s.sidebar_item)}
        to="/statisctics"
      >
        Statistics
      </NavLink>
      {/* <NavLink
        className={({ isActive }) => (isActive ? s.activeL : s.sidebar_item)}
        to="/chat"
      >
        Student
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? s.activeL : s.sidebar_item)}
        to="/rating"
      >
        Student
      </NavLink> */}
      <Link className={s.sidebar_item} onClick={logout} to="/login">
        Logout
      </Link>
    </div>
  );
};

export default SidebarStudent;

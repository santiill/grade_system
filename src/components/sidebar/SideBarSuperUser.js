import React from "react";
import { Link, NavLink } from "react-router-dom";
import s from "./Sidebar.module.css";
import { logout } from "./SidebarStudent";

const SidebarSuperUser = () => {
  return (
    <div className={s.sidebar_container}>
      <NavLink
        className={({ isActive }) => (isActive ? s.activeL : s.sidebar_item)}
        to="/registerUsers"
      >
        User registration
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? s.activeL : s.sidebar_item)}
        to="/registerSubject"
      >
        Subject registration
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? s.activeL : s.sidebar_item)}
        to="/*"
      >
        Student's profile
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? s.activeL : s.sidebar_item)}
        to="/subjects"
      >
        Subjects
      </NavLink>
      <Link className={s.sidebar_item} onClick={logout} to="/login">
        Logout
      </Link>
    </div>
  );
};

export default SidebarSuperUser;

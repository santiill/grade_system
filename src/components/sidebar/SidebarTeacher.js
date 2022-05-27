import React from "react";
import { Link, NavLink } from "react-router-dom";
import s from "./Sidebar.module.css";
import { logout } from "./SidebarStudent";

const SidebarTeacher = () => {
  return (
    <div className={s.sidebar_container}>
      <NavLink
        className={({ isActive }) => (isActive ? s.activeL : s.sidebar_item)}
        to="/*"
      >
        Предметы
      </NavLink>
      {/* <NavLink
        className={({ isActive }) => (isActive ? s.activeL : s.sidebar_item)}
        to="/clients"
      >
        Регистрация предмета
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? s.activeL : s.sidebar_item)}
        to="/chat"
      >
        Профили студентов
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? s.activeL : s.sidebar_item)}
        to="/professors_subjects"
      >
        Предметы
      </NavLink> */}
      <Link className={s.sidebar_item} onClick={logout} to="/login">
        Logout
      </Link>
    </div>
  );
};

export default SidebarTeacher;

import React, { useState } from "react";
import "../baseStyles.css";
import s from "./Header.module.css";

const Header = ({ openBar, bar }) => {
  const role = JSON.parse(localStorage.getItem("token"));

  return (
    <div className={s.header_cont}>
      <p className={`${s.header_text} ${s.dn_title}`}>Grade system</p>
      <p
        onClick={() => openBar(!bar)}
        className={`${s.db_icon} ${s.dn_icon} menu_icon`}
      >
        &#9776;
      </p>
      <p className={s.header_text}>
        {role.is_superuser == true && "Hi, Super User"}
        {role.is_student == true && "Hi, Akylai Temiralieva"}
        {role.is_professor == true && "Hi, Ruslan Isaev"}
      </p>
    </div>
  );
};

export default Header;

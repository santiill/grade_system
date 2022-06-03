import React, { useState } from "react";
import "../baseStyles.css";
import s from "./Header.module.css";

const Header = ({ openBar, bar }) => {
  return (
    <div className={s.header_cont}>
      <p className={`${s.header_text} ${s.dn_title}`}>Grade system</p>
      <p
        onClick={() => openBar(!bar)}
        className={`${s.db_icon} ${s.dn_icon} menu_icon`}
      >
        &#9776;
      </p>
      <p className={s.header_text}>Hi, User ;)</p>
    </div>
  );
};

export default Header;

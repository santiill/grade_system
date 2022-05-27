import React from "react";
import s from "./Button.module.css";

const Button = ({ value, type }) => {
  return (
    <button type={type} className={s.button}>
      {value}
    </button>
  );
};

export default Button;

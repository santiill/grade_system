import React from "react";
import s from "./Input.module.css";

const Input = ({
  name,
  label,
  type,
  onChange,
  label_classname,
  input_classname,
  value,
}) => {
  return (
    <div className={s.input_cont}>
      <label className={s[label_classname]}>{label}</label>
      <input
        value={value}
        name={name}
        onChange={onChange}
        type={type}
        className={s.input}
      />
    </div>
  );
};

export default Input;

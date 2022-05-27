import { useFormik } from "formik";
import React, { useState } from "react";
import Button from "../base/button/Button";
import Input from "../base/input/Input";
import ss from "./baseSuperUserStyles.module.css";
import { MdAddAPhoto } from "react-icons/md";
import { registerUser } from "../../redux2/actions/superUserAction";
import { useNavigate } from "react-router-dom";

const RegisterUsers = () => {
  const mapInput = [
    { id: 1, name: "staff_id" },
    { id: 2, name: "first_name" },
    { id: 3, name: "last_name" },
    { id: 4, name: "email" },
    { id: 5, name: "is_student" },
    { id: 6, name: "is_professor" },
    { id: 7, name: "password" },
  ];

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      staff_id: "",
      first_name: "",
      last_name: "",
      email: "",
      photo: "string",
      is_active: true,
      is_superuser: false,
      is_student: false,
      is_professor: false,
      password: "",
    },
    onSubmit: (data) => {
      registerUser(data, navigate);
    },
  });
  return (
    <>
      <h2>RegisterUsers</h2>
      <div className={ss.flex_center}>
        <form onSubmit={formik.handleSubmit} className={ss.form}>
          {mapInput.map((item) => {
            return (
              <Input
                name={item.name}
                onChange={formik.handleChange}
                key={item.id}
                label_classname="dark_label"
                label={item.name}
              />
            );
          })}
          <Button type="submit" value="register" />
        </form>
      </div>
    </>
  );
};

export default RegisterUsers;

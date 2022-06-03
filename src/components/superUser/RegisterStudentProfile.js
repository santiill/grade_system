import { useFormik } from "formik";
import React, { useState } from "react";
import Button from "../base/button/Button";
import Input from "../base/input/Input";
import ss from "./baseSuperUserStyles.module.css";
import { MdAddAPhoto } from "react-icons/md";
import {
  registerStudentProfile,
  registerSubject,
} from "../../redux2/actions/superUserAction";

const RegisterStudentProfile = () => {
  const mapInput = [
    { id: 1, name: "user_id" },
    { id: 2, name: "program" },
    { id: 3, name: "advisor" },
  ];

  const formik = useFormik({
    initialValues: {
      user_id: 0,
      program: "",
      advisor: "",
    },
    onSubmit: (data) => {
      console.log(data);
      registerStudentProfile(data);
    },
  });
  return (
    <>
      <h2>Student profile registration</h2>
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

export default RegisterStudentProfile;

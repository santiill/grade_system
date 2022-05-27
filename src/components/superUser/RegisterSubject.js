import { useFormik } from "formik";
import React, { useState } from "react";
import Button from "../base/button/Button";
import Input from "../base/input/Input";
import ss from "./baseSuperUserStyles.module.css";
import { MdAddAPhoto } from "react-icons/md";
import { registerSubject } from "../../redux2/actions/superUserAction";

const RegisterSubject = () => {
  const mapInput = [
    { id: 1, name: "professor_id" },
    { id: 2, name: "name" },
    { id: 3, name: "theory" },
    { id: 4, name: "practice" },
    { id: 5, name: "credits" },
    { id: 6, name: "ects" },
  ];

  const formik = useFormik({
    initialValues: {
      professor_id: 0,
      name: "",
      theory: 0,
      practice: "",
      credits: 0,
      ects: 0,
    },
    onSubmit: (data) => {
      console.log(data);
      registerSubject(data);
    },
  });
  return (
    <>
      <h2>Register Subject</h2>
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

export default RegisterSubject;

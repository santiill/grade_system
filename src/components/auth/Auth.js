import React from "react";
import s from "./Auth.module.css";
import "../baseStyles.css";
import Input from "../base/input/Input";
import Button from "../base/button/Button";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux2/actions/superUserAction";
// import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (data) => {
      console.log(data);
      const fData = new FormData();
      fData.append("username", data.username);
      fData.append("password", data.password);
      login(fData, navigate);
      /*  axios
        .post("https://grading-alatoo.herokuapp.com/login", {
          params: { username: "123456789", password: "123456789" },
        })
        .then((res) => console.log(res)); */
      // axios
      //   .post("https://grading-alatoo.herokuapp.com/login", fData)
      //   .then((res) => console.log(res));
    },
  });

  return (
    <div className={s.auth}>
      <div className={s.container}>
        <div className={s.frame_cont}>
          <img
            className={s.logo}
            src="https://st-1.akipress.org/st_all/bilim/9/1519540999.2.jpg"
          />
          <h1 className={s.title}>
            Computer Science
            <br /> Department
          </h1>
        </div>
        <form onSubmit={formik.handleSubmit} className={s.form}>
          <h4 className="form_title">Login</h4>
          <Input name="username" onChange={formik.handleChange} label="id" />
          <Input
            name="password"
            onChange={formik.handleChange}
            label="password"
          />
          <Button type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Auth;

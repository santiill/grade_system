// import { request } from "../api";
// import { getListOfSubjects } from "./superUserReducer";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// export const login = (data, navigate) => {
//   request.login(data).then((res) => {
//     console.log("login_data: ", res);
//     localStorage.setItem("token", res.data.access_token);
//     navigate("/*");
//   });
// };

// export const registerUser = (data) => {
//   request.userRegisterApi(data).then((res) => {
//     console.log("register_user_response: ", res);
//   });
// };

// export const registerSubject = (data) => {
//   request.subjectRegisterApi(data).then((res) => {
//     console.log("register_subject_response: ", res);
//   });
// };

// /* export const ge = createAsyncThunk("superUser/getListOfSubjects", async () => {
//   const res = await request.getListSubjectsApi();
//   console.log("fggg: ", res);
//   return res;
// }); */

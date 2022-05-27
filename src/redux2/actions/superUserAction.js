import { request } from "../../redux/api";
import {
  GET_LIST_OF_SUBJECTS,
  GET_LIST_OF_USERS,
  GET_STUDENT_PROFILE_DETAIL,
  GET_SUBJECT_DETAIL,
  RESET_PROFILE,
} from "../actionTypes";

export const login = (data, navigate) => {
  request.login(data).then((res) => {
    console.log("login_data: ", res);
    localStorage.setItem("token", JSON.stringify(res.data));
    navigate("/*");
    window.location.reload();
  });
};

export const registerUser = (data, navigate) => {
  request.userRegisterApi(data).then((res) => {
    console.log("register_user_response: ", res);
    data.is_student === "true" && navigate("/register_student_profile");
  });
};

export const registerSubject = (data) => {
  request.subjectRegisterApi(data).then((res) => {
    console.log("register_subject_response: ", res);
  });
};

export const registerStudentProfile = (data) => {
  request.studentProfileRegisterApi(data).then((res) => {
    console.log("register_profile_response: ", res);
  });
};

export const getListSubjects = () => (dispatch) => {
  request.getListSubjectsApi().then((res) => {
    console.log("subjects: ", res);
    dispatch({ type: GET_LIST_OF_SUBJECTS, payload: res.data });
  });
};

export const getListUsers = () => (dispatch) => {
  request.getListUsersApi().then((res) => {
    console.log("users: ", res);
    dispatch({ type: GET_LIST_OF_USERS, payload: res.data });
  });
};

export const getStudentProfile = (id) => (dispatch) => {
  request.getProfileDetailApi(id).then((res) => {
    console.log("student_profile: ", res.data);
    dispatch({ type: GET_STUDENT_PROFILE_DETAIL, payload: res.data });
  });
};

export const getSubjectDetail = (id) => (dispatch) => {
  request.getSubjectDetailApi(id).then((res) => {
    console.log("subject_profile: ", res.data);
    dispatch({ type: GET_SUBJECT_DETAIL, payload: res.data });
  });
};

export const resetProfile = () => (dispatch) => {
  dispatch({ type: RESET_PROFILE });
  console.log("reseted");
};

export const editStudentProfile = (id, data, close) => {
  request.editProfileDetailApi(id, data).then((res) => {
    console.log("new_student_profile: ", res);
    close();
  });
};

export const editSubjectSuper = (id, data, close) => {
  request.editSubjectSuperApi(id, data).then((res) => {
    console.log("new_subject_response: ", res);
    close();
  });
};

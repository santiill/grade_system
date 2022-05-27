import axios from "axios";

const token = JSON.parse(localStorage.getItem("token"));

const API = axios.create({
  baseURL: "https://grading-alatoo.herokuapp.com/",
  headers: {
    "Content-type": "multipart/form-data",
    Authorization: "Bearer" + token.access_token,
  },
});

const API2 = axios.create({
  baseURL: "https://grading-alatoo.herokuapp.com/",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${token.access_token}`,
  },
});

export const request = {
  login: (data) => API.post("login", data),
  userRegisterApi: (formData) => API2.post("create_user", formData),
  subjectRegisterApi: (formData) => API2.post("subject/", formData),
  studentProfileRegisterApi: (formData) =>
    API2.post("user/create_student_profile", formData),
  getListSubjectsApi: () => API2.get("subject/"),
  getListUsersApi: () => API2.get("user/"),
  getProfileDetailApi: (id) => API2.get(`userstudent_detail/${id}`),
  getSubjectDetailApi: (id) => API2.get(`subject/subject_detail/${id}`),
  editProfileDetailApi: (id, data) => API2.patch(`user/student/${id}`, data),
  editSubjectSuperApi: (id, data) =>
    API2.patch(`subjectregistered/${id}`, data),

  // teacher endpoints
  getListRegisteredSubjectsApi: () => API2.get("subject/registered_students"),
};

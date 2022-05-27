// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { ge, getAllListOfSubjects } from "./superUserFunctions";
// import { request } from "../api";

// export const get = createAsyncThunk("superUser/getListOfSubjects", async () => {
//   const res = await request.getListSubjectsApi();
//   console.log("hhhhhhh");
//   console.log("fggg: ", res);
//   return res;
// });

// const initialState = {
//   students_profile_list: [],
//   subjects: [],
// };

// const superUsersReducers = createSlice({
//   name: "superUser",
//   initialState,
//   reducers: {
//     getListOfStudentsProfile(state, action) {
//       state.students_profile_list = action.payload;
//       // state = initialState;
//     },
//     getListOfSubjects(state, action) {
//       state.subjects = action.payload;
//       console.log("kkkkkkkk");
//       // state = initialState;
//     },
//   },
//   extraReducers: {
//     [get.fulfilled]: (state, action) => {
//       state.subjects = action.payload;
//       console.log("first");
//     },
//   },
// });

// export const superUserReducers = superUsersReducers.reducer;
// export const { getListOfStudentsProfile, getListOfSubjects } =
//   superUsersReducers.actions;

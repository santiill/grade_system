import {
  GET_LIST_OF_SUBJECTS,
  GET_LIST_OF_USERS,
  GET_STUDENT_PROFILE_DETAIL,
  GET_SUBJECT_DETAIL,
  RESET_PROFILE,
} from "../actionTypes";

const initialState = {
  registered_subject: [],
};

export const superUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_OF_USERS:
      return { ...state, students_profile: action.payload };
    case GET_LIST_OF_SUBJECTS:
      return { ...state, subjects: action.payload };
    case GET_SUBJECT_DETAIL:
      return { ...state, subject: action.payload };
    case GET_STUDENT_PROFILE_DETAIL:
      return { ...state, profile: action.payload };
    case RESET_PROFILE:
      return { ...state, profile: {} };
    default:
      return state;
  }
};

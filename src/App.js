import { Modal, Rating } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import ProfessorsSubjects from "./components/professor/ProfessorsSubjects";
import Appointments from "./components/sections/appointments/Appointments";
import Chats from "./components/sections/chat/Chats";
import SidebarStudent from "./components/sidebar/SidebarStudent";
import Sidebar from "./components/sidebar/SidebarStudent";
import SidebarSuperUser from "./components/sidebar/SideBarSuperUser";
import SidebarTeacher from "./components/sidebar/SidebarTeacher";
import GradesList from "./components/student/GradesList";
import StudentGradeStatistics from "./components/student/Statistics";
import RegisterStudentProfile from "./components/superUser/RegisterStudentProfile";
import RegisterSubject from "./components/superUser/RegisterSubject";
import RegisterUsers from "./components/superUser/RegisterUsers";
import StudentProfile from "./components/superUser/StudentProfile";
import Students from "./components/superUser/StudentsList";
import Subjects from "./components/superUser/Subjects";
import SuperModal from "./components/superUser/SuperModal";
import { getListSubjects } from "./redux2/actions/superUserAction";
import "./components/baseStyles.css";
// import Chat from "./components/sections/chat/Chat";

function App() {
  const dispatch = useDispatch();
  const role = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();
  console.log("fg", role.is_student);
  useEffect(() => {
    dispatch(getListSubjects());
    console.log("hbsdj");
    localStorage.getItem("token") ? navigate("/*") : navigate("/login");
  }, []);

  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="sidebar">
        {role.is_superuser == true && <SidebarSuperUser />}
        {role.is_professor == true && <SidebarTeacher />}
        {role.is_student == true && <SidebarStudent />}
      </div>
      <div className="content">
        {role.is_superuser == true && (
          <Routes>
            <Route path="/registerUsers" element={<RegisterUsers />} />
            <Route
              path="/register_student_profile"
              element={<RegisterStudentProfile />}
            />
            <Route path="/registerSubject" element={<RegisterSubject />} />
            <Route path="/*" element={<Students />} />
            <Route path="/subjects" element={<Subjects />} />
          </Routes>
        )}
        {role.is_professor == true && (
          <Routes>
            <Route path="/*" element={<ProfessorsSubjects />} />
          </Routes>
        )}
        {role.is_student == true && (
          <Routes>
            <Route path="/*" element={<GradesList />} />
            <Route path="/statisctics" element={<StudentGradeStatistics />} />
          </Routes>
        )}
      </div>
    </div>
  );
}

export default App;

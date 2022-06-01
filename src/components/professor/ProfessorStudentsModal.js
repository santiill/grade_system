import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ss from "../superUser/baseSuperUserStyles.module.css";
import "../baseStyles.css";
import { useFormik } from "formik";
import Input from "../base/input/Input";
import { useDispatch, useSelector } from "react-redux";
import {
  editStudentProfile,
  resetProfile,
} from "../../redux2/actions/superUserAction";
import Button from "../base/button/Button";
import { msData } from "./md";

export default function ProfessorStudentsModal({ open, close }) {
  const profile = useSelector((state) => state.superUser.profile);
  const profil = useSelector((state) => state.superUser);
  const dispatch = useDispatch();
  console.log("ggg: ", profile);
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const closeModal = () => {
    dispatch(resetProfile());
    close();

    console.log(profil);
  };

  const formik = useFormik({
    initialValues: {
      program: profile,
      advisor: "profile.advisor",
    },
    onSubmit: (data) => {
      console.log("cvbn: ", data);
      dispatch(editStudentProfile(profile.id, data, close));
    },
  });

  return (
    <div>
      <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit} className={ss.form}>
            <p className="modal_title">List of students</p>
            <ol>
              {msData.map((st) => (
                <li className="list_text">{st.name}</li>
              ))}
            </ol>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

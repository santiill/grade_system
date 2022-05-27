import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ss from "./baseSuperUserStyles.module.css";
import { useFormik } from "formik";
import Input from "../base/input/Input";
import { useDispatch, useSelector } from "react-redux";
import {
  editStudentProfile,
  editSubjectSuper,
  resetProfile,
} from "../../redux2/actions/superUserAction";
import Button from "../base/button/Button";

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

export default function SuperSubjectsModal({ open, close, id }) {
  const subject = useSelector((state) => state.superUser.subject);
  const dispatch = useDispatch();
  console.log("ggg: ", subject);
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);

  const closeModal = () => {
    close();
    dispatch(resetProfile());
  };

  const formik = useFormik({
    initialValues: {
      professor_id: subject.professor_id,
      name: subject.name,
      theory: subject.theory,
      practice: subject.practice,
      credits: subject.credits,
      ects: subject.ects,
    },
    onSubmit: (data) => {
      console.log(data);
      dispatch(editSubjectSuper(subject.id, data, close));
    },
  });

  const mapInput = [
    { id: 1, name: "professor_id", value: subject.professor_id },
    { id: 2, name: "name", value: subject.name },
    { id: 3, name: "theory", value: subject.theory },
    { id: 4, name: "practice", value: subject.practice },
    { id: 4, name: "credits", value: subject.credits },
    { id: 5, name: "ects", value: subject.ects },
  ];

  return (
    <div>
      <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <form onSubmit={formik.handleSubmit} className={ss.form}>
            {mapInput.map((item) => {
              return (
                <Input
                  name={item.name}
                  onChange={formik.handleChange}
                  key={item.id}
                  label_classname="dark_label"
                  label={item.name}
                  value={item.value}
                />
              );
            })}
            <Button type="submit" value="register" />
          </form>
        </Box>
      </Modal>
    </div>
  );
}

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

export default function SuperModal({ open, close }) {
  const profile = useSelector((state) => state.superUser.profile);
  const profil = useSelector((state) => state.superUser);
  const dispatch = useDispatch();
  console.log("ggg: ", profile);
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);

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

  const mapInput = [
    { id: 1, name: "advisor", value: profile.advisor },
    { id: 2, name: "program", value: profile.program },
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

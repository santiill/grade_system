import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getListSubjects,
  getListUsers,
  getStudentProfile,
} from "../../redux2/actions/superUserAction";
import BaseTable from "../base/Table";
//
// import * as React from "react";
import "../baseStyles.css";
import { styled } from "@mui/material/styles";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import SuperModal from "./SuperModal";
//
const Students = () => {
  // ====================================================
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  // ============================================
  const dispatch = useDispatch();
  const students = useSelector((state) => state.superUser.students_profile);
  const list_st = students.filter((s) => s.is_student == true);
  console.log("firsthhh: ", students);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(getListUsers());
    console.log("hbsdj");
  }, []);

  const getProfileDetail = (id) => {
    dispatch(getStudentProfile(id));
    handleOpen();
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Practice</StyledTableCell>
              {/* <StyledTableCell align="center">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="center">Protein&nbsp;(g)</StyledTableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {list_st.map((s, index) => (
              <StyledTableRow onClick={() => getProfileDetail(s.id)} key={s.id}>
                <StyledTableCell component="th" scope="row">
                  {s.id}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {s.first_name} {s.last_name}
                </StyledTableCell>
                <StyledTableCell align="center">{s.email}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <SuperModal close={handleClose} open={open} />
    </>
  );
};

export default Students;

import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { request } from "../../redux/api";
import {
  getListOfSubject,
  getListOfSubjects,
  getListOfSubjectss,
} from "../../redux/reducers/superUserReducer";
import {
  getListSubjects,
  getSubjectDetail,
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
import SuperSubjectsModal from "./SuperSubjectsModal";
//
const Subjects = () => {
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
  const subjects = useSelector((state) => state.superUser.subjects);
  console.log("first: ", subjects);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(getListSubjects());
    console.log("subjects");
  }, []);

  const getProfileDetail = (id) => {
    dispatch(getSubjectDetail(id));
    handleOpen();
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell /* align="right" */>Name</StyledTableCell>
              <StyledTableCell /* align="right" */>practice</StyledTableCell>
              {/* <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {subjects.map((s, index) => (
              <StyledTableRow onClick={() => getProfileDetail(s.id)} key={s.id}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell /* align="right" */>{s.name}</StyledTableCell>
                <StyledTableCell /* align="right" */>
                  {s.practice}
                </StyledTableCell>
                {/* <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <SuperSubjectsModal close={handleClose} open={open} />
    </>
  );
};

export default Subjects;

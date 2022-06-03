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
import SuperModal from "../superUser/SuperModal";
import { mgData } from "./md";

//
const GradesList = () => {
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
  const p_sub = subjects.filter((s) => s.professor_id == 3);
  console.log("first: ", subjects);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>&#8470;</StyledTableCell>
              <StyledTableCell /* align="right" */>
                Subject name
              </StyledTableCell>
              <StyledTableCell /* align="right" */>Grade</StyledTableCell>
              {/* <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {mgData.map((s, index) => (
              <StyledTableRow key={s.id}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell /* align="right" */>{s.name}</StyledTableCell>
                <StyledTableCell /* align="right" */>{s.grade}</StyledTableCell>
                {/* <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default GradesList;

import React from "react";
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Processes from "../Components/Processes"
import BurstTime from "../Components/BurstTime";
import DisplayWaitingTime from "../Components/DisplayWaitingTime";
import DisplayTurnaroundTime from "../Components/DisplayTurnaroundTime";
import AverageWaitingTime from "../Components/AverageWaitingTime";
import WaitingTime from "../Components/WaitingTime";
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import '../index.css';

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
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

export {DisplayTurnaroundTime ,AverageWaitingTime, DisplayWaitingTime, React,Processes,BurstTime, WaitingTime ,Button ,Table , TableBody  ,TableContainer ,TableHead ,StyledTableCell ,StyledTableRow ,TableRow};
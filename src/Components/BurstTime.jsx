import React from 'react'
import {StyledTableCell ,StyledTableRow } from "../Imported/ImpProcessCreation"

const BurstTime=(props)=>{

   return(
    <>
      <StyledTableRow >
         <StyledTableCell >{props.time}</StyledTableCell>
      </StyledTableRow>
    </>
   )
}

export default BurstTime;
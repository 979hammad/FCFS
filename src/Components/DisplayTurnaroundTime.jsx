import React from 'react'
import {StyledTableCell ,StyledTableRow } from "../Imported/ImpProcessCreation"

const DisplayTurnaroundTime=(props)=>{
   return(
    <>
       <StyledTableRow >
       <StyledTableCell >{props.tat}</StyledTableCell>
       </StyledTableRow>
    </>
   )
}

export default DisplayTurnaroundTime;
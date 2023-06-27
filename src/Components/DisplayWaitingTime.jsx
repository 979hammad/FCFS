import React from 'react'
import {StyledTableCell ,StyledTableRow } from "../Imported/ImpProcessCreation"

const DisplayWaitingTime=(props)=>{

   return(
    <>
      <StyledTableRow >
       <StyledTableCell >{props.finalTime}</StyledTableCell>
      </StyledTableRow>
    </>
   )
}

export default DisplayWaitingTime;
import React from 'react'
import {StyledTableCell ,StyledTableRow } from "../Imported/ImpProcessCreation"

const Processes=(props)=>{
   return(
    <>
       <StyledTableRow >
       <StyledTableCell >{props.process}</StyledTableCell>
       </StyledTableRow>
    </>
   )
}

export default Processes;
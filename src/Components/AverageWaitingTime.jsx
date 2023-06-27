import React from 'react'
import {Button ,StyledTableCell ,StyledTableRow } from "../Imported/ImpProcessCreation"

const AverageWaitingTime=(props)=>{
   const avgTime = props.avgWt;
   const avgTaT = props.avgtat;
    return(
    <>   
    <StyledTableRow>
       <StyledTableCell ><Button variant="contained" color="success">Avg Waiting = {avgTime.toFixed(2)}</Button></StyledTableCell>
       <StyledTableCell ><Button variant="contained" color="success">Avg TAT = {avgTaT.toFixed(2)}</Button></StyledTableCell>   
    </StyledTableRow> 
    </>
    
   )
}

export default AverageWaitingTime;
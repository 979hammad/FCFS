import { useState } from "react";
import {React,Processes,BurstTime, WaitingTime ,Button ,Table , TableBody , TableContainer ,TableHead ,StyledTableCell ,StyledTableRow ,TableRow} from "../Imported/ImpProcessCreation"

const ProcessCreation =(props)=>{
    // Time
    const [time , updateTime] = useState([]);
    const [arr , updateArray] = useState();
    // process
    const [process , updateProcess] = useState([]);
    const [arrP , updateProcessArray] = useState();
    
    const getTime =(event)=>{
      const timee = event.target.value;
      updateArray(timee);
    }
    const getProcess =(event)=>{
        const processes = event.target.value;
        updateProcessArray(processes);
    }

    const done = ()=>{
        updateTime(items => [...items , arr])
        updateProcess(items => [...items , arrP])  
    }

    return(
        <>
        <div className="name" >
        <input value={arrP} name="pName" onChange={getProcess} type="text" placeholder='Enter Process Name...' autocomplete="off" />
        <input className="burst" value={arr} name="time" onChange={getTime} type="number" placeholder='Enter Burst Time...' autocomplete="off"/>
        </div>
        <div className="addmebtn">
        <Button variant="contained" color="success" onClick={done} className="addme">
        ADD PROCESS
        </Button>
        </div>
        <div className="table">
    <TableContainer>
      <Table sx={{ minWidth: 920 }} aria-label="customized table">
        <TableHead>
           <TableRow >
                <StyledTableCell>PName</StyledTableCell>
                <StyledTableCell>Burst Time</StyledTableCell>
                <StyledTableCell>Finish Time &emsp;&emsp;&emsp; Waiting Time</StyledTableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow>
            <StyledTableCell >
            {
                process.map((element)=>{
                   return<Processes
                   process = {element}
                   />
                })
           }
           </StyledTableCell>
           <StyledTableCell >
           {
                time.map((element)=>{
                    return<BurstTime
                    time = {element}
                    timeArr = {time}
                    />
                })
            }
           </StyledTableCell>
           <StyledTableCell >
                <WaitingTime
                    time = {time}
                />
           </StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
        </div>
        </>
    )
}

export default ProcessCreation;
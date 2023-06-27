import React from "react"; 
import {DisplayTurnaroundTime ,AverageWaitingTime, DisplayWaitingTime,StyledTableCell ,StyledTableRow } from "../Imported/ImpProcessCreation"

const WaitingTime =(props)=>{
    let arr = [0];
    let tat = []
    
    props.time.forEach((current , index , arrr)=>{
        for(let i=0; i<props.time.length; i++ ){
          // calculating waiting Time
          arr[i+1] = arr[i] + parseInt(arrr[i]);
          // calculating Turnaround Time
          tat[i] = arr[i] + parseInt(arrr[i]);
          // calculating average waiting Time
        }  
    })
    arr.pop()
    // Average Waiting Time
    const recieved = () =>{
      var waitingTimee = 0;
        for(let i = 0 ; i<arr.length ; i++)
        {
            waitingTimee += arr[i];
        }
      return waitingTimee;
    }
    // Average TurnAroundTime
    const recievedTAT = () =>{
      var TurnAroundTimee = 0;
        for(let i = 0 ; i<tat.length ; i++)
        {
          TurnAroundTimee += tat[i];
        }
      return TurnAroundTimee;
    }

    const AvgWaitingTimee = recieved()/arr.length;
    const AvgTurnAroundTime = recievedTAT()/tat.length;

    return(
        <>
      <div className="rowSetting">
      <StyledTableRow >
            <StyledTableCell >
            {
              tat.map((current)=>{
                  return<DisplayTurnaroundTime
                  tat = {current}
                  />
              })
            }
            </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow >
            <StyledTableCell >
            
            {
              arr.map((current)=>{
                  return<DisplayWaitingTime
                  finalTime = {current}
                  />
              })
            }
            </StyledTableCell>
      </StyledTableRow>
      <AverageWaitingTime
                    avgWt = {AvgWaitingTimee}
                    avgtat = {AvgTurnAroundTime}
                />
      </div>
               
          
        
        </>
    )
}

export default WaitingTime;
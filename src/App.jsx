import React from 'react'
import ProcessCreation from "./Components/ProcessCreation";
import Button from '@mui/material/Button';
import './index.css';

const App=()=>{
   
    function reset() {
        window.location.reload(false);
      }
   return(
    <>  
        <h1 className='heading'>First Come First Served (FCFS)</h1>
        <p>Non-Preemptive [ Arrival Time = 0 ]</p>
        
        <ProcessCreation />

        <div className="addmebtn">
        <Button variant="contained" color="error" onClick={reset} className="addme del">RESET ALL</Button>
        </div>
       
    </>
   )
}

export default App;
import React, {useState} from 'react'
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import axios from 'axios';
import { API_URL } from '../utils';

export const AddTaskForm = ({ fetchTasks }) => {
    const [newTask, setnewTask] = useState("");
  
    const addNewTask = async () => {
      try {
        await axios.post(API_URL, { name: newTask, completed: false });
        await fetchTasks();           
        setnewTask("");                 
      } catch (err) {
        console.log(err);
      }
    };
  
    
    return (
        <div className='add-task-form'>
            <Typography align="center" variant="h2" paddingTop={2} paddingBottom={2} sx={{ width: "100%" }}>
            My Task List 
            </Typography>
           <div className='inputrow'>    
                <TextField size="small" label="Task" variant="outlined" value={newTask} onChange={(e)=>setnewTask(e.target.value)}/>
                <Button disabled={!newTask.length} variant='outlined' onClick={addNewTask}>
                    <AddIcon />
                </Button>
           </div> 
        </div>
    

  )
}

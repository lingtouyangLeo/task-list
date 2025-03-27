import React, {useState} from 'react'
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const AddTaskForm = () => {

    const [newTask, setnewTask] = useState("")
    const addNewTask = () => {
        console.log("Adding new task")
    }
    return (
        <div className='add-task-form'>
            <Typography align="center" variant="h2" paddingTop={2} paddingBottom={2} sx={{ width: "100%" }}>
            My Task List 
            </Typography>
           <div>    
                <TextField size="small" label="Task" variant="outlined" value={newTask} onChange={(e)=>setnewTask(e.target.value)}/>
                <Button disabled={!newTask.length} variant='outlined' onClick={addNewTask}>
                    <AddIcon />
                </Button>
           </div> 
        </div>
    

  )
}

import React, {useState} from 'react';
import { Dialog, DialogTitle, TextField, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../utils';

export const UpdateTaskForm = (
    { fetchTasks, isDialogOpen, setIsDialogOpen, task }
) => {
    const { id, name, completed } = task
    const [taskName, setTaskName] = useState("")
    const handleUpdateTask = async () => {
        try {
            await axios.put(API_URL, {id, name: taskName, completed});
            await fetchTasks();
            setTaskName("");
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (isDialogOpen) {
            setTaskName(name || "")
        }
    }, [isDialogOpen, name])
  return (
    <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <DialogTitle>Edit Task</DialogTitle>
        <div className='flex'>
            <TextField size="small" label="Task" variant="outlined" value={taskName} onChange={(e)=>setTaskName(e.target.value)}/>
            <Button onClick={async ()=>{
                await handleUpdateTask();
                setIsDialogOpen(false);}}>
                <CheckIcon />
            </Button>
        </div>
    </Dialog>
  )
}

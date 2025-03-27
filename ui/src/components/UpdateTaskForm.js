import React, {useState} from 'react';
import { Dialog, DialogTitle, TextField, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export const UpdateTaskForm = (
    { isDialogOpen, setIsDialogOpen, task }
) => {
    const { id, name, completed } = task
    const [taskName, setTaskName] = useState("")
  return (
    <Dialog open={isDialogOpen}>
        <DialogTitle>Edit Task</DialogTitle>
        <div className='flex'>
            <TextField size="small" label="Task" variant="outlined" onChange={(e)=>setTaskName(e.target.value)}/>
            <Button onClick={()=>setIsDialogOpen(false)}>
                <CheckIcon />
            </Button>
        </div>
    </Dialog>
  )
}

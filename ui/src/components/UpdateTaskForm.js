import React, {useState} from 'react';
import { Dialog, DialogTitle, TextField, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useEffect } from 'react';

export const UpdateTaskForm = (
    { isDialogOpen, setIsDialogOpen, task }
) => {
    const { id, name, completed } = task
    const [taskName, setTaskName] = useState("")

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
            <Button onClick={()=>setIsDialogOpen(false)}>
                <CheckIcon />
            </Button>
        </div>
    </Dialog>
  )
}

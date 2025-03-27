import React, {useState} from 'react'
import { Button, Typography, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { UpdateTaskForm } from "./UpdateTaskForm";
import classnames from 'classnames'

export const Task = ({task}) => {
    const {id, name, completed} = task
    const [iscompleted, setIscompleted] = useState(completed)
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const handleupdateTaskCompletion = () => {
        setIscompleted((prev) => !prev)
    }
    const handleDeleteTask = () => {
        console.log('Deleting task')
    }
  return (
    <div className='task'>
        <div className={classnames('flex', {done: iscompleted})}>
            <Checkbox checked={iscompleted} onChange={handleupdateTaskCompletion} />
            <Typography variant='h4'>{name}</Typography>
        </div>
        <div className='taskButtons'>
            <Button variant='contained' onClick={()=>setIsDialogOpen(true)}>
                <EditIcon />
            </Button>
            <Button color="error" variant='contained' onClick={handleDeleteTask}>
                <DeleteIcon />
            </Button>
        </div>
        <UpdateTaskForm isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} task={task} />
    </div>
  )
}

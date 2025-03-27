import React, {useState} from 'react'
import { Button, Typography, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { UpdateTaskForm } from "./UpdateTaskForm";
import classnames from 'classnames';
import axios from 'axios';
import { API_URL } from '../utils';

export const Task = ({task, fetchTasks}) => {
    const {id, name, completed} = task;
    const [iscompleted, setIscompleted] = useState(completed);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const handleupdateTaskCompletion = async () => {
        try {
            await axios.put(API_URL, {id, name, completed: !iscompleted});
            setIscompleted(!iscompleted);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteTask = async () => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            await fetchTasks();
        } catch (error) {
            console.log(error);
            
        }
    };

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
        <UpdateTaskForm fetchTasks={fetchTasks} isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} task={task} />
    </div>
  )
}

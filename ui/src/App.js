import React, { useState, useEffect } from "react";
import { AddTaskForm } from "./components/AddTaskForm";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Task } from "./components/Task";
import axios from "axios";
import { API_URL } from "./utils";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [tasks, settasks] = useState([]);
  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(API_URL);
      settasks(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className='app-container'>
        <AddTaskForm fetchTasks={fetchTasks}/>
        {tasks.map((task) => (
          <Task task={task} key={task.id} fetchTasks/>
        ))}
      </div>
    </ThemeProvider>
  );
}

export default App;

import { AddTaskForm } from "./components/AddTaskForm";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Task } from "./components/Task";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const task = {
  id: 1,
  name: "do dishes",
  completed: false,
};

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className='app-container'>
        <AddTaskForm />
        <Task task={task}/>
      </div>
    </ThemeProvider>
  );
}

export default App;

import './global.css'
import style from './App.module.css'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { ListTask } from './components/ListTask'
import { useState } from 'react'

interface AddTask {
  id: number;
  content: string;
  checked: boolean;
}

export function App() {

  const[tasks, setTasks] = useState<AddTask[]>([]);
  const[inputValue, setInputValue] = useState('');

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if(currentTask.checked) {
      return prevValue + 1;
    }

    return prevValue;
  }, 0)

  function handleAddTask() {
    if(!inputValue) {
      return;
    }

    const addTask: AddTask = {
      id: new Date().getTime(),
      content: inputValue,
      checked: false
    }

    setTasks((state) => [...state, addTask]);
  }

  function removeTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    if(!confirm('Deseja mesmo apagar a tarefa?')) {
      return;
    }

    setTasks(filteredTasks);
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }

      return { ...task }
    })

    setTasks(updatedTasks)
  }


  return (
    <div>
      <Header />
      <div className={style.fullContent}>
        <div className={style.newTaskField}>
          <NewTask 
            onChange={e => setInputValue(e.target.value)}
            value={inputValue}
            onClick={handleAddTask}
            />
        </div>
        <ListTask />
      </div>
    </div>

  )
}

export default App

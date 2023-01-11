import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Index from './pages/Index';
import Tasks from './pages/Tasks';
import { Axios } from 'axios'
import Modal from './Modal';

export const axios = new Axios({
  baseURL: "https://serverside-rust.vercel.app/api/"
})

function App() {

  const [tasks, setTasks] = useState([]);
  const [modal, setModal] = useState()

  useEffect(() => {
    /* get tasks as string and parse to json (object)  */
    axios.get("tasks")
      .then(response => {
        return JSON.parse(response.data)
      }).then(data => setTasks(data))
  }, [])

  const onAddTask = (task) => {
    axios.post("tasks",
      JSON.stringify(task),
      { headers: { 'Content-Type': 'application/json' } })
      .then(response => {
        if (response.status === 500) return alert(response.data)
        const newTask = JSON.parse(response.data)
        setTasks([...tasks, newTask])
        setModal(null)
      })
  }

  const onRemoveTask = (task) => {
    axios.delete(`tasks/${task._id}`)
      .then(response => {
        if (response.status === 500) return alert(response.data)
        setTasks(tasks.filter(innerTask => {
          return innerTask._id !== task._id
        }))
      })
  }




  const onUpdateTask = (task) => {
    axios.put("tasks",
      JSON.stringify(task),
      { headers: { 'Content-Type': 'application/json' } })
      .then(response => {
        if (response.status === 500) return alert(response.data)
        const updatedTask = JSON.parse(response.data)
        setTasks(tasks.map(task => task._id === updatedTask._id ? updatedTask : task))
        setModal(null)
      })
  }
  return (
    <div className="App">
      <nav className='flex justify-evenly p-4 bg-[#2a2438] text-white'>
        <Link to="/tasks">Tasks</Link>
      </nav>
      {modal && <Modal content={modal} setContent={setModal} />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/tasks" element={<Tasks
          tasks={tasks}
          setModal={setModal}
          onAddTask={onAddTask}
          onUpdateTask={onUpdateTask}
          onRemoveTask={onRemoveTask} />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App

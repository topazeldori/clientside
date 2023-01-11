import { useState } from "react"
import AddTask from "./AddTask"
import EditTask from "./EditTask"
import TaskCard from "./TaskCard"

export default function Tasks({ tasks, setModal, onAddTask, onUpdateTask, onRemoveTask }) {

    return <div className="flex flex-col gap-5 items-center w-2/3 ml-auto mr-auto">
        <h1 className="p-2 font-bold text-3xl">Tasks</h1>
        {tasks.map(task => <TaskCard
            key={task.title + task.createdAt}
            task={task}
            onUpdateTask={onUpdateTask}
            onUpdateTaskClicked={() => { setModal(<EditTask taskToEdit={task} onUpdateTask={onUpdateTask} />) }}
            onRemoveTask={() => onRemoveTask(task)}
        />)}

        <div className="w-20 h-20 absolute bottom-8 right-8 bg-[#2a2438] text-3xl cursor-pointer text-white grid place-items-center"
            style={{ borderRadius: '50%' }}
            onClick={() => setModal(<AddTask onAddTask={onAddTask} />)}>
            +
        </div>
    </div>
}
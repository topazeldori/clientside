

const TaskActions = ({ onUpdateTaskClicked, onRemoveTaskClicked }) => {
    return <div className="absolute right-2 top-2">
        <div className="material-icons" onClick={onUpdateTaskClicked}>edit</div>
        <div className="material-icons" onClick={onRemoveTaskClicked}>delete</div>
    </div>
}

export default function TaskCard({ task, onUpdateTask, onUpdateTaskClicked, onRemoveTask }) {
    const dateString = new Date(task.createdAt).toLocaleDateString("he-IL")
    return <div className="flex flex-col rounded-lg bg-white drop-shadow-md p-2 z-1  text-black w-1/2 min-w-[350px]">
        <input className=" self-start w-4 h-4" type="checkbox"
            onChange={() => onUpdateTask({ ...task, completed: !task.completed })}
            checked={task.completed} />
        <label className="text-xl font-bold">{task.title}</label>
        <label>{task.createdBy}</label>
        <label>{dateString}</label>
        <TaskActions onUpdateTaskClicked={onUpdateTaskClicked} onRemoveTaskClicked={onRemoveTask} />
    </div>
}
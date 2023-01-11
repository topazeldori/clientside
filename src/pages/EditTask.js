

export default function EditTask({ taskToEdit, onUpdateTask }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target[0].value;
        const createdBy = e.target[1].value;
        const description = e.target[2].value;
        const createdAt = taskToEdit.createdAt
        const completed = taskToEdit.completed;
        const taskEdited = { title, createdBy, description, createdAt, completed, _id:taskToEdit._id };
        onUpdateTask(taskEdited);
    }

    return <form onSubmit={handleSubmit} className="flex flex-col gap-5 items-center w-2/3 ml-auto mr-auto">
        <h1 className="p-2 font-bold text-3xl text-white">Edit Task</h1>
        <input type="text" placeholder="Title" className="p-2" defaultValue={taskToEdit.title} />
        <input type="text" placeholder="Created by" className="p-2" defaultValue={taskToEdit.createdBy}  />
        <input type="text" placeholder="Description" className="p-2" defaultValue={taskToEdit.description} />
        <button className="p-2 bg-[#2a2438] text-white w-4/5 rounded-md">Save changes</button>
    </form>
}


export default function AddTask({ onAddTask }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target[0].value;
        const createdBy = e.target[1].value;
        const description = e.target[2].value;
        const createdAt = new Date();
        const completed = false;
        const task = { title, createdBy, description, createdAt, completed };
        onAddTask(task);
    }

    return <form onSubmit={handleSubmit} className="flex flex-col gap-5 items-center w-2/3 ml-auto mr-auto">
        <h1 className="p-2 font-bold text-3xl text-white">Add Task</h1>
        <input type="text" placeholder="Title" className="p-2" />
        <input type="text" placeholder="Created by" className="p-2"  />
        <input type="text" placeholder="Description" className="p-2" />
        <button className="p-2 bg-[#2a2438] text-white w-4/5 rounded-md">Add</button>
    </form>
}
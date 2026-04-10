function TaskItem({ task, deleteTask, toggleTask }) {
  return (
    <div className="flex justify-between items-center bg-white p-3 mb-2 rounded shadow">
      
      <span
        onClick={() => toggleTask(task.id)}
        className={`cursor-pointer ${
          task.done ? "line-through text-gray-400" : ""
        }`}
      >
        {task.text}
      </span>

      <button
        onClick={() => deleteTask(task.id)}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
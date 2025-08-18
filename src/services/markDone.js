import { loadTasks, saveTasks } from "./persistenceUtils.js";

export async function markDone(taskId) {
    try {
        if (!taskId || typeof taskId !== 'number') { // validate taskId
            console.error("A valid task ID is required to mark a task as done.");
            throw new Error("Invalid task ID.");
        }
        const tasks = await loadTasks(); // Load existing tasks
        const taskIndex = tasks.findIndex(task => task.id === taskId); // Find the task by ID
        console.log(`[DEBUG] Task index found: ${taskIndex}`);
        if (taskIndex !== -1) {
            tasks[taskIndex].completed = true; // Mark the task as completed
            await saveTasks(tasks);
            console.log(`Task marked as done: ${taskId}`);
        } else {
            console.error(`Task not found: ${taskId}`);
        }
    } catch (error) {
        console.error("Error marking task as done:", error);
    }
}
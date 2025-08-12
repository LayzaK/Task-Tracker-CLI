import { loadTasks, saveTasks } from "./persistenceUtils";

export async function removeTasks(taskIds) {
    try {
        if(!taskIds || !Array.isArray(taskIds)) {
            console.log("Invalid task ID - it's necessary to provide a valid array of task IDs.");
            return;
        }
        const tasks = await loadTasks(); // Load existing tasks
        const initialLength = tasks.length;
        const updatedTasks = tasks.filter(task => task.id !== taskIds); // Filter out tasks that match the provided IDs

        if (updatedTasks.length < initialLength) {
            await saveTasks(updatedTasks);
            console.log(`Tasks with IDs ${taskIds.join(", ")} have been removed.`);
        } else {
            console.log("No tasks found with the provided IDs.");
        }
    } catch (error) {
        console.error("Error removing tasks:", error);
    }
}

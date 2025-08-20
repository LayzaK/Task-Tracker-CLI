import { loadTasks } from "./persistenceUtils.js";

export async function listTasks() {

    try {
        const tasks = await loadTasks();
        if (tasks.length === 0) {
            console.log("No tasks found, want to add one? Use the 'add' command.");
            return [];
        }

        console.log("\n--- Current tasks: ---");
        tasks.forEach(task => {
            const status = task.completed ? "✓" : "✗";
            console.log(`ID: ${task.id}, Description: ${task.description}, Completed: ${status}`);
        });
        console.log("-----------------------");
        
    } catch (error) {
        console.error("Error loading tasks:", error);
        throw error;
    }
}
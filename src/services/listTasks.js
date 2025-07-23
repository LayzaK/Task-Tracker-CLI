import { loadTasks } from "./persistenceUtils";

export async function listTasks() {

    try {
        const tasks = await loadTasks();
        if (tasks.length === 0) {
            console.log("No tasks found, want to add one? Use the 'add' command.");
            return [];
        }

        console.log("\n--- Current tasks: ---");
        tasks.array.forEach(element => {
            const status = element.completed ? "✓" : "✗";
            console.log(`ID: ${element.id}, Description: ${element.description}, Completed: ${status}`);
        });
        console.log("-----------------------");
        
    } catch (error) {
        console.error("Error loading tasks:", error);
        throw error;
    }
}
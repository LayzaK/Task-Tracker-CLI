import { loadTasks, saveTasks } from "./persistenceUtils.js";

export async function addTask(description){
    //function to add a task
    if (!description || typeof description !== 'string'){
        console.error("Description is required to add a task.");
        return;
    }
     try {
        const tasks = await loadTasks();
        const newId = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1; // Generate a new ID based on existing tasks
        const newTask = {
            id: newId,
            description: description.trim(), // Trim whitespace from the description
            completed: false
        };
        tasks.push(newTask);
        await saveTasks(tasks);

        console.log(`Task added successfully: ID ${newId}, Description: "${description}"`);

    } catch (error) {
        console.error("Error adding task:", error);
    }
}
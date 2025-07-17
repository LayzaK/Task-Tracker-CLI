import fs from 'fs/promises';
import fsSync from 'fs';

const TASKS_FILE = '../data/tasks.json';

export async function loadTasks() {
    try {

        if (!fsSync.existsSync(TASKS_FILE)) {
            await fs.writeFile(TASKS_FILE, '[]', 'utf8'); // Create the file if it doesn't exist
            return [];
        }

        const data = await fs.readFile(TASKS_FILE, 'utf8');
        return JSON.parse(data);

    } catch (error) {
        console.error("Error loading tasks:", error);
        return [];
    }
}

export async function saveTasks(tasks) {
    const data = JSON.stringify(tasks, null, 2);
    
    await fs.writeFile(TASKS_FILE, data, 'utf8');
    // console.log("Tasks saved successfully.");
}


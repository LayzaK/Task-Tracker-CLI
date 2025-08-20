import fs from 'fs/promises';
import fsSync from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '../../');
const TASKS_FILE = path.join(projectRoot, 'data', 'tasks.json');

export async function loadTasks() {
    try {

        if (!fsSync.existsSync(TASKS_FILE)) {
            await fs.writeFile(TASKS_FILE, '[]', 'utf8'); // Create the file if it doesn't exist
            console.log(`[DEBUG] Created empty ${TASKS_FILE} file.`);
            return [];
        }

        const data = await fs.readFile(TASKS_FILE, 'utf8');
        console.log(`[DEBUG] Loaded tasks from ${TASKS_FILE}.`);
        return JSON.parse(data);

    } catch (error) {
        console.error("Error loading tasks:", error);
        return [];
    }
}

export async function saveTasks(tasks) {
    const data = JSON.stringify(tasks, null, 2); 
    await fs.writeFile(TASKS_FILE, data, 'utf8');
    console.log(`[DEBUG] Saved tasks to ${TASKS_FILE}.`);
}


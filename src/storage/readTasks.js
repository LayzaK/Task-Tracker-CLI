
const fs = require('fs'); // Import the file system module for file operations
const { TASK_FILE_PATH } = require('../../config/path'); // Import the path to the tasks file

/**
 * Reads tasks from the tasks file.
 * @returns {Array} An array of tasks, or an empty array if the file doesn't exist or is empty.
 */

function readTasks() {
    try {
        // Read the file synchronously as UTF-8 text
        const data = fs.readFileSync(TASK_FILE_PATH, 'utf8');

        // If the file is empty or contains only whitespace, return an empty array
        if (data.trim() === '') {
            return []; 
        }

        // Parse and return the JSON data from the file
        return JSON.parse(data);
    } catch (error) {
        // If the file does not exist, log a message and return an empty array
        if (error.code === 'ENOENT') {
            console.log("Task file not found. Creating a new one.");
            return [];
        }
        
        // For other errors, log the error message and return an empty array
        console.error("Error reading the task file:", error.message);
        return [];
    }
}

export default readTasks; // Export the readTasks function for use in other modules
// This module provides a function to read tasks from a JSON file.
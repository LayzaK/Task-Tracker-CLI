
const fs = require('fs'); // (1) Import the 'fs' module
const { TASK_FILE_PATH } = require('../../config/path'); // (2) Import the task file path

/**
 * Function to write an array of tasks to the JSON file.
 * @param {Array} tasks - The array of tasks to be saved.
 */
<<<<<<< HEAD
async function writeTasks(tasks) { // (3) Define the writeTasks function, which receives an array of 'tasks'
=======
function writeTasks(tasks) { // (3) Define the writeTasks function, which receives an array of 'tasks'
>>>>>>> 030bd3a89eef0f6ca8b16ae27604067316d3d92a
    try { // (4) Try block: Attempts to execute the code below
        // (5) Converts the JavaScript array/object 'tasks' to a JSON string
        // The 'null, 2' formats the JSON with 2-space indentation for readability
        const data = JSON.stringify(tasks, null, 2); 
        
        // (6) Writes the JSON string (data) to the file specified by TASK_FILE_PATH
        fs.writeFileSync(TASK_FILE_PATH, data, 'utf8');
    } catch (error) { // (7) Catch block: Catches any errors
        // (8) If an error occurs while writing, displays the error message.
        console.error("Error writing to the task file:", error.message);
    }
}

<<<<<<< HEAD
export default writeTasks; // (9) Exports the writeTasks function as default
=======
module.exports = writeTasks; // (9) Exports the writeTasks function
>>>>>>> 030bd3a89eef0f6ca8b16ae27604067316d3d92a
// This module provides a function to write tasks to a JSON file.
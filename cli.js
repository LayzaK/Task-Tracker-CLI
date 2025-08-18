import {listTasks} from "./src/services/listTasks.js";
import {addTask} from "./src/services/addTask.js";
import {markDone} from "./src/services/markDone.js";
import {removeTasks} from "./src/services/removeTasks.js";

export async function cli() {
    const args = process.argv.slice(2); // get the command and task from the arguments
    const command = args[0]; // the first argument from the command line is the command (add, list, etc.)
    const values = args.slice(1); // the second argument is the task description or ID

    switch (command) {
        case 'add':
            // For the 'add' command, the description is the concatenation of all 'values'
            const description = values.join(' ');
            await addTask(description);
            break;

        case 'list':
        case 'ls':
            // listTasks does not require arguments
            await listTasks();
            break;

        case 'done':
            // For 'done', take the first value and convert it to a number
            const doneTaskId = parseInt(values[0]);
            await markDone(doneTaskId);
            break;

        case 'remove':
            // For 'remove', map all values to numbers
            const removeTaskIds = values.map(id => parseInt(id));
            await removeTasks(removeTaskIds);
            break;

        default:
            console.log("Unrecognized command. Use 'add <description>', 'list', 'done <id>' or 'remove <id>'.");
            break;
    }
}

cli().catch(error => {
    console.error("Error occurred:", error);
});
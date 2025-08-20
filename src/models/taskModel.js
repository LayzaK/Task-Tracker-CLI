import readTasks from '../storage/readTasks'; // Import the readTasks function to read tasks from storage

function createTask(description, dueDate) {
    if (!description || typeof description !== 'string') {
        throw new Error("Description and due date are required to create a task.");
    }

    // Validate the due date if provided
    let finalDueDate = null;
    if (dueDate) {
        const parsedDate = new Date(dueDate);
        if (isNaN(parsedDate)) {
            throw new Error("Invalid date format. Please provide a valid date.");
        }

        finalDueDate = parsedDate.toISOString(); // Convert to ISO string for consistency
    }


    // generating a sequence number for the task
    const tasks = readTasks(); // Read existing tasks from storage
    const lastId = tasks.length > 0 
    ? Math.max(...tasks.map(task => task.id)) // Get the last task ID
    : 0;
    const newId = lastId + 1; // Increment the last ID for the new task


    return {
        id: newId,
        description: description.trim(), // Trim whitespace from the description
        status: 'pending',
        dueDate: finalDueDate,
        createdAt: new Date().toISOString(), // Set the creation date to the current date
    };
}

export default createTask; 

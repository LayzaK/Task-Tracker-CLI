# Task-Tracker
The Task-Tracker is a straightforward command-line tool designed to help you manage and keep tabs on your tasks. It's perfect for anyone looking for a light and direct way to organize their daily routine!

## How does it work? ## 
This application is built with **Node.js** and operates via commands in your terminal. It uses a `tasks.json` file to store all your tasks, ensuring they persist even after you close the terminal.

| Internal Function | CLI Command                    | Description                                                 |
| :---------------- | :----------------------------- | :---------------------------------------------------------- |
| `addTasks`        | `node cli.js add <task_description>` | Adds a **new task** to your list.                           |
| `listTasks`       | `node cli.js list`             | Displays **all your saved tasks**.                          |
| `markDone`        | `node cli.js done <task_id>`   | Marks a specific task as **completed**.                     |
| `removeTasks`     | `node cli.js remove <task_id>` | Removes a task from your list.                              |

### Usage example ###
```bash
# Add a new task
node cli.js add "Buy bread and milk"

# List all tasks
node cli.js list

# Mark the task with ID 1 as done
node cli.js done 1

# Remove the task with ID 2
node cli.js remove 2
```
## How to install? ##
### 1. Prerequisites
To run this application, you need to have **Node.js** installed on your machine.  

You can check if Node.js is already installed by opening your terminal or command prompt and running:

```bash

node -v
If Node.js is not installed, you can download it from the official website.
````
2. Installation and Execution
2.1 Clone the repository
```bash
Copy
Edit
git clone [https://github.com/LayzaK/Task-Tracker-CLI]
```
2.2 Navigate to the project directory
```bash
cd Task-Tracker-CLI
```
2.3 Run the commands
You can now start using the application. 


## Main Goal ##
The primary purpose of this program is to help you learn about modularization and how JavaScript and Node.js work together. This project is intentionally simple, making it ideal for study or inspiration. It also includes additional features beyond those required by the original project specification.

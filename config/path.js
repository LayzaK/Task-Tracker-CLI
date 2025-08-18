const path = require('path');

const configDirPath = __dirname;
const absolutePathToTaskJson = path.join(configDirPath, '..', 'data', 'tasks.json');

module.exports = {
  TASK_FILE_PATH: absolutePathToTaskJson,
};

// console.log(absolutePathToTasksJson);
<<<<<<< HEAD
import { join } from 'path';

const configDirPath = __dirname;
const absolutePathToTaskJson = join(configDirPath, '..', 'data', 'tasks.json');

export const TASK_FILE_PATH = absolutePathToTaskJson;
=======
const path = require('path');

const configDirPath = __dirname;
const absolutePathToTaskJson = path.join(configDirPath, '..', 'data', 'tasks.json');

module.exports = {
  TASK_FILE_PATH: absolutePathToTaskJson,
};
>>>>>>> 030bd3a89eef0f6ca8b16ae27604067316d3d92a

// console.log(absolutePathToTasksJson);
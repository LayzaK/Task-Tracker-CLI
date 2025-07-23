import { join } from 'path';

const configDirPath = __dirname;
const absolutePathToTaskJson = join(configDirPath, '..', 'data', 'tasks.json');

export const TASK_FILE_PATH = absolutePathToTaskJson;

// console.log(absolutePathToTasksJson);
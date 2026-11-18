import { demoTasks, variantNumber, variantTasks } from "./data.js";
import {
  createTask,
  findTaskById,
  getPendingTasks,
  getTaskTitles,
  getTaskStats,
  addTask,
  setTaskCompleted,
  renameTask,
  removeTask,
} from "./task-service.js";

console.log("ПР2. Заготовка демонстрационного сценария");
console.log("Количество задач в общем наборе:", demoTasks.length);
console.log("Номер варианта:", variantNumber);
console.log("Количество задач в индивидуальном наборе:", variantTasks.length);

// TODO: после реализации функций выполнить общий сценарий из раздела 6.5.
// Текущее состояние хранится в локальной переменной:
// let currentTasks = demoTasks;
// После успешной операции currentTasks получает result.tasks.
// При result.ok === false необходимо вывести ошибку, не заменяя состояние.
// Сводка выводится после каждого этапа; вычисления выполняются в task-service.js.

// TODO: выполнить отдельный сценарий для variantTasks по разделу 7.
// Общий набор demoTasks не заменяется данными варианта.

// TODO: показать хотя бы одну обработанную ошибку и неизменность исходных данных.
// Для удобного вывода объектов допустимо использовать console.table().

let currentTasks = demoTasks;
console.table(currentTasks);
console.log(getTaskStats(demoTasks));
let {ok, tasks: newtasks} = addTask(currentTasks, 20, "Добавить проверку", "high");
({ok, tasks: newtasks} = setTaskCompleted(newtasks, 4, true));
({ok, tasks: newtasks} = renameTask(newtasks, 10, "Подготовить инструкцию запуска"));
({ok, tasks: newtasks} = removeTask(newtasks, 7));
console.table(currentTasks);
console.table(newtasks);
let result = renameTask(newtasks, -1, "Лучшее название");
console.log(result.error);
console.log(getTaskStats(newtasks));


console.log("Далее - индивидуальный вариант");


currentTasks = variantTasks;
console.table(variantTasks);
({ok, tasks: newtasks} = addTask(currentTasks, 80, "Провести аудит текущего API", "medium"));
({ok, tasks: newtasks} = setTaskCompleted(newtasks, 11, true));
({ok, tasks: newtasks} = renameTask(newtasks, 23, "Установить крайние сроки выполнения задач"));
({ok, tasks: newtasks} = removeTask(newtasks, 37));
console.table(newtasks);
result = addTask(newtasks, 80, "Уволить Егора", "high");
console.table(newtasks);
console.table(variantTasks);
console.log(getTaskStats(newtasks));
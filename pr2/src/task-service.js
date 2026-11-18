// Заготовка модуля. throw ниже отмечает отсутствие реализации,
// а не способ обработки некорректных данных в готовом решении.
// Для предусмотренных ошибок необходимо возвращать { ok: false, error: "..." }.
// console.log(), prompt(), document и чтение внешнего состояния здесь не нужны.

export function createTask(id, title, priority = "medium") {
  //проверка типов
  if(typeof id !== "number" || 
  typeof title !== "string" || 
  !["low","medium","high"].includes(priority)){
	  return {ok: false, error: "Ошибка: Задача не может быть создана, так как один или несколько аргументов имеют неверный тип данных."};
  }
  //проверка значения id
  if(Number.isSafeInteger(id)===false || id <= 0){
	return {ok: false, error: "Ошибка: Задача не может быть создана, так как предоставлен некорректный id."};
  }

  title = title.trim();

  if(title.length === 0 || title.length > 100){
	return {ok: false, error: "Ошибка: Задача не может быть создана, так как предоставлен title неприемлимой длины."};
  }
  
  return {
	  ok: true,
	  task: {
		  id: id,
		  title: title,
		  completed: false,
		  priority: priority
	  }
  }
}

export function findTaskById(tasks, id) {
  for (const task of tasks){
	  if (task.id === id){
		  return task;
	  }
  }
  return undefined;
}

export function getPendingTasks(tasks) {
	const deepcopy = structuredClone(tasks);
	return deepcopy.filter(deepcopy => deepcopy.completed === false);
}

export function getTaskTitles(tasks) {
  return tasks.map(task => task.title);
}

export function getTaskStats(tasks) {
  const total = tasks.length;
  const pending = getPendingTasks(tasks).length;
  const completed = total - pending;
  const progress = total !== 0 ? (completed / total * 100) : 0;
  return {total,completed,pending,progress};
}

export function addTask(tasks, id, title, priority = "medium") {
  // TODO: проверить данные через createTask(), исключить дублирование id,
  // вернуть { ok: true, tasks: новыйМассив } без изменения исходного массива.
  if (findTaskById(tasks, id) !== undefined){
	return {ok: false, error: `Предупреждение: Задача не была добавлена, так как задача с данным id (${id}) уже существует.`}
  }
  const newtask = createTask(id, title, priority);
  if (newtask.ok === false){
	  return {ok: false, error: "Ошибка: Задача не была добавлена, так как заданы некорректные агрументы создания."}
  }
  return {ok: true, tasks: [...structuredClone(tasks), newtask.task]};
}

export function setTaskCompleted(tasks, id, completed) {
  if (!Number.isSafeInteger(id) || id < 0) return { ok: false, error: "Ошибка: Задача не была помечена как выполненная, так как предоставлен некорректный id." };
  if (typeof completed !== "boolean") return { ok: false, error: "Ошибка: Задача не была помечена как выполненная, так как предоставлен некорректный completed." };
  const tasksdeepcopy = structuredClone(tasks);
  const selectedtask = findTaskById(tasksdeepcopy, id);
  if (selectedtask === undefined) return {ok: false, error: "Ошибка: Задача с данным id не найдена"}
  selectedtask.completed = completed;
  return {ok: true, tasks: tasksdeepcopy};
}

export function renameTask(tasks, id, title) {
  if (!Number.isSafeInteger(id) || id < 0) return { ok: false, error: "Ошибка: Задача не была переименована, так как предоставлен некорректный id." };
  if (typeof title !== "string") return { ok: false, error: "Ошибка: Задача не была переименована, так как предоставлен некорректный title." };
  title = title.trim();
  if (title.length === 0 || title.length > 100) return { ok: false, error: "Ошибка: Задача не была переименована, так как предоставлен некорректный title." };
  const tasksdeepcopy = structuredClone(tasks);
  const selectedtask = findTaskById(tasksdeepcopy, id);
  if (selectedtask === undefined) return {ok: false, error: "Ошибка: Задача с данным id не найдена"}
  selectedtask.title = title;
  return {ok: true, tasks: tasksdeepcopy};
}

export function removeTask(tasks, id) {
  if (!Number.isSafeInteger(id) || id < 0) return { ok: false, error: "Ошибка: Задача не была удалена, так как предоставлен некорректный id." };
  const tasksdeepcopy = structuredClone(tasks);
  const selectedtask = findTaskById(tasksdeepcopy, id);
  if (selectedtask === undefined) return {ok: false, error: "Ошибка: Задача с данным id не найдена"}
  const filteredtasks = tasksdeepcopy.filter(task => task.id !== id);
  return {ok: true, tasks: filteredtasks};
}

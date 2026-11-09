"use strict";

const totalTasks = 10001;
const completedTasks = 0;

let status = "В работе";

//проверка ввода
if (typeof(totalTasks) !== "number" || typeof(completedTasks) !== "number"
|| Number.isNaN(totalTasks) || Number.isNaN(completedTasks)){
	console.log("Ошибка: недопустимое значение. (NaN или неверный тип)");
	process.exit(1);
};
if (totalTasks > 1000 || totalTasks < 0){
	console.log("Ошибка: недопустимое кол-во задач. (>1000 или <0)");
	process.exit(1);
};
if (completedTasks < 0 || completedTasks > totalTasks){
	console.log("Ошибка: недопустимое кол-во выполненных задач. (больше общего кол-ва задач или <0)");
	process.exit(1);
};
if (!Number.isInteger(completedTasks) || !Number.isInteger(totalTasks)){
	console.log("Ошибка: недопустимое значение. (дробное кол-во задач)");
	process.exit(1);
};

//вывод результата
if(totalTasks == 0){
	console.log("Задач пока нет");
	process.exit(1);
};

let progress = completedTasks / totalTasks * 100;
progress = progress.toFixed(1);

if (totalTasks == completedTasks){
	status = "Завершено";
};
if (completedTasks == 0){
	status = "Не начато";
};
console.log(`Осталось ${totalTasks - completedTasks}; прогресс ${progress}%; статус «${status}».`);

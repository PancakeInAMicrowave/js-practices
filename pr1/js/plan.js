"use strict";

const totalTasks = 5 ;
const completedTasks = 2 ;
const dailyLimit = 1001 ;

let remainingTasks = totalTasks - completedTasks;
let days = 0;

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
if (typeof(dailyLimit) !== "number" || Number.isNaN(dailyLimit)){
	console.log("Ошибка: недопустимое значение дневной нормы. (NaN или неверный тип)");
	process.exit(1);
};
if (!Number.isInteger(dailyLimit) || dailyLimit < 1 || dailyLimit > 1000){
	console.log("Ошибка: недопустимая дневная норма. (должна быть от 1 до 1000 целых задач)");
	process.exit(1);
};

//вывод результата
if (totalTasks == completedTasks){
	console.log("Все задачи уже выполнены");
	console.log("Потребуется дней: 0");
	process.exit(0);
};

console.log(`Осталось задач: ${remainingTasks}`);

while (remainingTasks > 0){
	days++;
	let dailyTasks = Math.min(remainingTasks, dailyLimit);
	remainingTasks = remainingTasks - dailyTasks;
	console.log(`День ${days}: выполнено ${dailyTasks}, осталось ${remainingTasks}`);
};

console.log(`Потребуется дней: ${days}`);

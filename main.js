// Функции - Functions
// Функции нужны для возможности повторного использования блока кода, но уже не набирая его повторно и повторно

// Функция объявляется следующим образом

function showMessage() {
	console.log('Написал первую функцию на марафоне'); // Эта часть называется телом функции
}

// Для вызова функции, необходимо набрать его имя
showMessage();

// Теперь, чтобы повторно вывести код из тела функции, достаточно набрать ещё раз его имя, для вызова функции
showMessage();

// Переменные, объявленные внутри функции, называются локальными. Соответсвенно, видны только внутри самой функции
function helloMessage() {
	let hiFanil = 'Сәлам, Фәнил';
	console.log(hiFanil);
}

// Вызываем функцию, мы должны увидеть сообщение. Но попытке вывести в лог содержимое самой переменной, должны получить ошибку. Т.ч. переменная не была объявлена\

helloMessage();
// console.log(hiFanil);
// Получили ошибку, пры выводу в консоль.

// Функции имеют доступ к внешним переменным, сейчас объявлю переменную и буду использовать в теле функции
let globalMessage = 'Hello world';

function usingGlobalVariable() {
	console.log(globalMessage);
}

usingGlobalVariable();
console.log(globalMessage);
// Должен два раза получить Hello world - Done

// Если глобальную переменной присвоить новое значение внутри функции, то он перепишет его после вызова

function changeGlobalVariable() {
	globalMessage = 'I learn';
	let message = globalMessage + ' Java Script';
	console.log(message);
}

console.log(globalMessage); // Check variable before will call function
changeGlobalVariable();
console.log(globalMessage); //Check variable after calling function
// Variable has been changed

// Если в теле функции объявлена переменная с таким же именем (локальная переменная), то глобальная останется без изменений. Т.к. функция в первую
// очередь использует локальную

let sameVar = 'Я глобальная переменная sameVar';

function usingLocalVarWithSameName() {
	let sameVar = 'А я локальная переменная sameVar';
	console.log(sameVar);
}

// Теперь sameVar будет "Я глобальная переменная sameVar", до и после вызова функции
console.log(sameVar);
usingLocalVarWithSameName();
console.log(sameVar);

// Параметры - Parametrs
// Параметры используются для передачи какой-либо информации внутрь функции. Их также называют аргументами функции

function usingParams(textP, nameP) {
	textP = textP + ',';
	let userMessage = textP + ' ' + nameP;
	console.log(userMessage);
	// console.log(textP);
}

let textP = 'Хаюшки';

usingParams(textP, 'Гость');
usingParams('Пока', 'Гость');
// При помощи параметров, наша функция была использована для приветствия с посетителем и при прощании
// Параметры являются локальными переменными
console.log(textP);

// Для перменной можно задавать значения по умолчанию, во время вызова функции.
// Сейчас этого нет, пробую вызвать функцию без второго параметра
usingParams('Привет');

// Объявляем функцию с параметром по умолчанию

function withDeafaultParam(user, age = '25') {
	let usersAge = user + ' ' + age + ' ' + 'лет';
	console.log(usersAge);
}

withDeafaultParam('Фаниль', '27');
withDeafaultParam('Антон');

// Задачи

// function checkAge(age) {
// 	if (age > 18) {
// 		return true;
// 	}

// 	return confirm('Родители разрешили?');
// }

// console.log(checkAge(19));
// console.log(checkAge(15));

// function checkAge(age) {
// 	if (age > 18) {
// 		return true;
// 	} else {
// 		return confirm('Родители разрешили?');
// 	}
// }
// function checkAgeWithAskSymbol(age) {
// 	return (age > 18) ? true : confirm('Родители разрешили?');
// }

// checkAgeWithAskSymbol(11);
// function checkAgeWithOR(age) {
// 	return age > 18 || confirm('Родители разрешили?');
// }

// checkAgeWithOR(2);
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

function min(a, b) {
	if (a < b) {
		return a;
	} else if (a == b) {
		return 'Мы такое не сравниваем';
	} else {
		return b;
	}
}

console.log('Min between 54, 44 = ', min(54, 44));
console.log('Min between 24, 44 = ', min(24, 44));
console.log('Min between -54, 78 = ', min(-54, 78));
console.log('Min between 23, 23 = ', min(23, 23));

// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

function pow(x, n) {
	return x ** n;
}

console.log('Число 4 в степени 2 = ', pow(4, 2));
console.log('Число 3 в степени 2 = ', pow(3, 2));
console.log('Число 3 в степени 3 = ', pow(3, 3));
console.log('Число 3 в степени 4 = ', pow(3, 4));

// Создайте простой калькулятор Calc, который будет принимать значение a и значение b, а так же идентификатор нужного действия.

// Пример вызова такой функции

// Calc(‘sum’, 1, 2) - возвращает 3
// Calc(‘multi’, 1, 2) - возвращает 2

// И так далее, со всеми математическими действиями, которые вы изучили в задаче #7

// Но и это еще не все.

// Ваш калькулятор должен возвращать сообщение “Error” в том случае если вы не указали все 3 параметра или если вычисляемые значения оказались не числами.

// В случае с неверным “идентификатором нужного действия” возвращайте “unknown operation”

function Calc(mathOperation, a, b) {
	if (
		mathOperation == undefined ||
		a == undefined ||
		b == undefined ||
		typeof a !== 'number' ||
		typeof b !== 'number'
	) {
		return 'Error';
	} else if (mathOperation == 'sum') {
		return a + b;
	} else if (mathOperation == 'multi') {
		return a * b;
	} else if (mathOperation == 'Subt') {
		return a - b;
	} else if (mathOperation == 'Dvsn') {
		return a + b;
	} else if (mathOperation == 'Exp') {
		return a ** b;
	} else if (mathOperation == 'Rmndr') {
		return a % b;
	}
	return 'unknown operation';
}

console.log(Calc('sum', 2, 3));
console.log(Calc('multi', 2, 3));
console.log(Calc('Subt', 2, 3));
console.log(Calc('Dvsn', 2, 3));
console.log(Calc('Exp', 2, 3));
console.log(Calc('Rmndr', 2, 3));
console.log(Calc('su', 2, 3));
console.log(Calc('su', '', 3));
console.log(Calc('su', 2, ''));
console.log(Calc('sum', 3));

// let mathOperation = prompt('Что ты хочешь сделать с числами? \n Умножить: multi \n Сложить: sum');
// let a = +prompt('Введите число', 7);
// let b = +prompt('Введите число', 2);

// alert(Calc(mathOperation, a, b));

// let k = 'l';
// let t = +k;
// let five = 5;

// let sum = t + five;

// console.log(typeof t);
// console.log(sum);
// console.log(typeof sum);
// console.log(typeof NaN);
// console.log(isNaN(five));

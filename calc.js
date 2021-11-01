// Создайте простой калькулятор Calc, который будет принимать значение a и значение b, а так же идентификатор нужного действия.

// Пример вызова такой функции

// Calc(‘sum’, 1, 2) - возвращает 3
// Calc(‘multi’, 1, 2) - возвращает 2

// И так далее, со всеми математическими действиями, которые вы изучили в задаче #7

// Но и это еще не все.

// Ваш калькулятор должен возвращать сообщение “Error” в том случае если вы не указали все 3 параметра или если вычисляемые значения оказались не числами.

// В случае с неверным “идентификатором нужного действия” возвращайте “unknown operation”

function Calc(mathOperation, num1, num2) {
	const isNotValid =
		mathOperation == undefined ||
		num1 == undefined ||
		num2 == undefined ||
		typeof num1 !== 'number' ||
		typeof num2 !== 'number';

	if (isNotValid) {
		return 'Error';
	} else if (mathOperation == 'sum') {
		return `${num1} + ${num2} = ${num1 + num2}`;
	} else if (mathOperation == 'multi') {
		return `${num1} x ${num2} = ${num1 * num2}`;
	} else if (mathOperation == 'Subt') {
		return `${num1} - ${num2} = ${num1 - num2}`;
	} else if (mathOperation == 'Dvsn') {
		return `${num1} / ${num2} = ${num1 / num2}`;
	} else if (mathOperation == 'Exp') {
		return `${num1} в ${num2} степени: ${num1 ** num2}`;
	} else if (mathOperation == 'Rmndr') {
		return `Остаток от деления ${num1} на ${num2}: ${num1 % num2}`;
	}
	return 'unknown operation';
}

console.log(Calc('sum', 2, 9));
console.log(Calc('multi', 2, 3));
console.log(Calc('Subt', 2, 3));
console.log(Calc('Dvsn', 27, 3));
console.log(Calc('Exp', 18, 3));
console.log(Calc('Rmndr', 9, 3));
console.log(Calc('su', 2, 3));
console.log(Calc('su', '', 3));
console.log(Calc('su', 2, ''));
console.log(Calc('sum', 3));

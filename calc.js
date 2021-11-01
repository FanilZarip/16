// Создайте простой калькулятор Calc, который будет принимать значение a и значение b, а так же идентификатор нужного действия.

// Пример вызова такой функции

// Calc(‘sum’, 1, 2) - возвращает 3
// Calc(‘multi’, 1, 2) - возвращает 2

// И так далее, со всеми математическими действиями, которые вы изучили в задаче #7

// Но и это еще не все.

// Ваш калькулятор должен возвращать сообщение “Error” в том случае если вы не указали все 3 параметра или если вычисляемые значения оказались не числами.

// В случае с неверным “идентификатором нужного действия” возвращайте “unknown operation”

function Calc(mathOperation, a, b) {
	const isNotValid =
		mathOperation == undefined ||
		a == undefined ||
		b == undefined ||
		typeof a !== 'number' ||
		typeof b !== 'number';

	if (isNotValid) {
		return 'Error';
	} else if (mathOperation == 'sum') {
		return `Результат сложения ${a} и ${b}: ${a + b}`;
	} else if (mathOperation == 'multi') {
		return `Результат умножения ${a} на ${b}: ${a * b}`;
	} else if (mathOperation == 'Subt') {
		return `Результат вычитания ${b} от ${a}: ${a - b}`;
	} else if (mathOperation == 'Dvsn') {
		return `Результат деления${a} на ${b}: ${a / b}`;
	} else if (mathOperation == 'Exp') {
		return `${a} в ${b} степени: ${a ** b}`;
	} else if (mathOperation == 'Rmndr') {
		return `Остаток от деления ${a} на ${b}: ${a % b}`;
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

const expressionParser = (expression = '') => {
	const digits = '0123456789.';
	const operators = ['+', '-', '*', '/', 'negate'];
	const legend = {
		 '+': { pred: 2, func: (a, b) => { return a + b; }, assoc: "left" },
		 '-': { pred: 2, func: (a, b) => { return a - b; }, assoc: "left" },
		 '*': { pred: 3, func: (a, b) => { return a * b; }, assoc: "left" },
		 '/': { pred: 3, func: (a, b) => {
		 if (b !== 0) { return a / b; } else { return 0; }
	}
	}, assoc: "left",
	'negate': { pred: 4, func: (a) => { return -1 * a; }, assoc: "right" }
};

let operations = [];
let outputQueue = [];
let i = 0;
let str = '';
while (i < expression.length) {
	let character = expression[i];
	if (operators.includes(character)) {
		 if (str !== '') {
				outputQueue.push(Number(str));
				str = '';
		 }
		 if (character === '-') {
				if (i === 0) {
					 character = 'negate';
				} else {
					 let nextCharacter = expression[i+1];
					 let previousCharacter = expression[i-1];
					 if ((digits.includes(nextCharacter) || nextCharacter === '(' || nextCharacter === '-') &&
							(operators.includes(previousCharacter) || expression[i-1] === '(')) {
								 character = 'negate';
					 }
				}
		 }
		 if (operations.length > 0) {
				let topOper = operations[operations.length - 1];
				while (operations.length > 0 && legend[topOper] &&
				((legend[character].assoc === 'left' && legend[character].pred <= legend[topOper].pred) ||
				(legend[character].assoc === 'right' && legend[character].pred < legend[topOper].pred))) {
					 outputQueue.push(operations.pop());
					 topOper = operations[operations.length - 1];
				}
		 }
		 operations.push(character);
	} else if (digits.includes(character)) {
		 str += character
	} else if (character === '(') {
		 operations.push(character);
	} else if (character === ')') {
		 if (str !== '') {
				outputQueue.push(Number(str));
				str = '';
		 }
		 while (operations.length > 0 && operations[operations.length - 1] !== '(') {
				outputQueue.push(operations.pop());
		 }
		 if (operations.length > 0) { operations.pop(); }
	}
	i++;
}
if (str !== '') { outputQueue.push(Number(str)); }
	outputQueue = outputQueue.concat(operations.reverse())
	let res = [];
	while (outputQueue.length > 0) {
		 let character = outputQueue.shift();
		 if (operators.includes(character)) {
				if (character === 'negate') {
					 res.push(legend[character].func(res.pop()));
				} else {
					 let [num2, num1] = [res.pop(), res.pop()];
					 res.push(legend[character].func(num1, num2));
				}
		 } else {
				res.push(character);
		 }
	}
	return res.pop().valueOf();
};

export default expressionParser;

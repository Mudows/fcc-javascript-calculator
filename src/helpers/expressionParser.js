const divisionParser = (expression) => {
	const numbersString = expression.split('/');
	const numbers = numbersString.map(noStr => +noStr);
	/* const initialValue = 0.1; */
	const result = numbers.reduce((acc, no) => acc / no);
	return result;
};

const multiplicationParser = (expression) => {
	const numbersString = expression.split('*');
	const numbers = numbersString.map(noStr => divisionParser(noStr));
	const initialValue = 1.0;
	const result = numbers.reduce((acc, no) => acc * no, initialValue);
	return result;
};

const subtractionParser = (expression) => {
	const numbersString = expression.split('-');
	const numbers = numbersString.map(noStr => multiplicationParser(noStr));
	const initialValue = numbers[0];
	const result = numbers.slice(1).reduce((acc, no) => acc - no, initialValue);
	return result;
};

const expressionParser = (expression) => {
	const numbersString = expression.split('+');
	const numbers = numbersString.map(noStr => subtractionParser(noStr));
	const initialValue = 0.0;
	const result = numbers.reduce((acc, no) => acc + no, initialValue);
	return result;
};

export default expressionParser;

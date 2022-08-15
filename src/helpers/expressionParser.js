const expressionParser = (expression = '') => {
  const digits = '0123456789.';
  const operators = ['+', '-', '*', '/', 'negate'];
  const legend = {
    '+': {
      pred: 2,
      operation: (a, b) => {
        return a + b;
      },
      assoc: 'left',
    },
    '-': {
      pred: 2,
      operation: (a, b) => {
        return a - b;
      },
      assoc: 'left',
    },
    '*': {
      pred: 3,
      operation: (a, b) => {
        return a * b;
      },
      assoc: 'left',
    },
    '/': {
      pred: 3,
      operation: (a, b) => {
        if (b !== 0) {
          return a / b;
        } else {
          return 0;
        }
      },
    },
    assoc: 'left',
    negate: {
      pred: 4,
      operation: (a) => {
        return -1 * a;
      },
      assoc: 'right',
    },
  };

  let operations = [];
  let outputQueue = [];
  let i = 0;
  let str = '';

  /* This is the Shunting-yard algorithm. It converts an infix expression to a postfix expression. */
  while (i < expression.length) {
    let character = expression[i];
    if (operators.includes(character)) {
      if (str !== '') {
        outputQueue.push(Number(str));
        str = '';
      }

      /* This is a special case for the negative sign. If the negative sign is the first character in the
			expression, it is converted to the 'negate' operator. If the negative sign is preceded by an
			operator or an opening parenthesis, it is also converted to the 'negate' operator. */
      if (character === '-') {
        if (i === 0) {
          character = 'negate';
        } else {
          let nextCharacter = expression[i + 1];
          let previousCharacter = expression[i - 1];
          if (
            (digits.includes(nextCharacter) ||
              nextCharacter === '(' ||
              nextCharacter === '-') &&
            (operators.includes(previousCharacter) || expression[i - 1] === '(')
          ) {
            character = 'negate';
          }
        }
      }

      /* This is the part of the Shunting-yard algorithm that converts an infix expression to a postfix
			expression. */
      if (operations.length > 0) {
        let topOper = operations[operations.length - 1];
        while (
          operations.length > 0 &&
          legend[topOper] &&
          ((legend[character].assoc === 'left' &&
            legend[character].pred <= legend[topOper].pred) ||
            (legend[character].assoc === 'right' &&
              legend[character].pred < legend[topOper].pred))
        ) {
          outputQueue.push(operations.pop());
          topOper = operations[operations.length - 1];
        }
      }

      operations.push(character);
    } else if (digits.includes(character)) {
      str += character;
    } else if (character === '(') {
      operations.push(character);
    } else if (character === ')') {
      if (str !== '') {
        outputQueue.push(Number(str));
        str = '';
      }

      while (
        operations.length > 0 &&
        operations[operations.length - 1] !== '('
      ) {
        outputQueue.push(operations.pop());
      }

      if (operations.length > 0) {
        operations.pop();
      }
    }
    i++;
  }

  if (str !== '') {
    outputQueue.push(Number(str));
  }

  outputQueue = outputQueue.concat(operations.reverse());
  let res = [];

  /* This is the RPN algorithm. It evaluates the postfix expression. */
  while (outputQueue.length > 0) {
    let character = outputQueue.shift();
    if (operators.includes(character)) {
      if (character === 'negate') {
        res.push(legend[character].operation(res.pop()));
      } else {
        let [num2, num1] = [res.pop(), res.pop()];
        res.push(legend[character].operation(num1, num2));
      }
    } else {
      res.push(character);
    }
  }

  return res.pop().valueOf();
};

export default expressionParser;

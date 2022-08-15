import expressionParser from '../../helpers/expressionParser';

const INITIAL_STATE = {
  expressionInput: '0',
  expressionRequested: '0',
  ghostExpression: '0',
};

const javaScriptCalculator = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_INPUT':
      const operators = '+-*/';
      const currInput = state.expressionInput;

      /* This is checking to see if the user is trying to input a decimal point. If they are, it will
      check to see if the current input already has a decimal point. If it does, it will return the
      current state, preventing additional decimal points in the same number. */
      if (action.newInput === '.' && currInput.includes('.'))
        return { ...state };
      
      /* This is checking to see if the expressionRequested is 0. If it is, it will set the
      expressionRequested to the newInput. If it is not, it will add the newInput to the
      expressionRequested. */
      if (state.expressionRequested === '0') {
        state.expressionRequested = action.newInput;
      } else {
        state.expressionRequested += action.newInput;
      }

      const noMinus = '+*/';

      /* This is a check to see if the user is trying to input a minus sign. If they are, it will keep
      the previous sign and the minus, considering that the next number will be negative. If it's not
      a minus sign, it will replace the previous operator with the new one. */
      if(noMinus.includes(action.newInput)) {
        let previousInput = state.expressionRequested[state.expressionRequested.length - 1];
        while (operators.includes(previousInput)){
          state.expressionRequested = state.expressionRequested.slice(0, state.expressionRequested.length - 1)
          previousInput = state.expressionRequested[state.expressionRequested.length - 1];
        }
        state.expressionRequested += action.newInput;
      }

      /* This is checking to see if the current input is 0, or if the new input is an operator, or if
      the current input is an operator. If any of those are true, it will set the expressionInput to
      the newInput. If none of those are true, it will add the newInput to the expressionInput. */
      if (
        currInput === '0' ||
        operators.includes(action.newInput) ||
        operators.includes(currInput)
      ) {
        state.expressionInput = action.newInput;
      } else {
        state.expressionInput += action.newInput;
      }
      return { ...state };
    case 'CLEAR_INPUT':
      return { expressionInput: '0', expressionRequested: '0' };
    case 'CALCULATE':
      const result = expressionParser(state.expressionRequested);
      return { expressionInput: result, expressionRequested: result };
    default:
      return state;
  }
};

export default javaScriptCalculator;

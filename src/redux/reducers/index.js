import expressionParser from "../../helpers/expressionParser";

const INITIAL_STATE = {
  expressionInput: '0',
  expressionRequested: '0',
};

const javaScriptCalculator = (state = INITIAL_STATE, action) => {
 switch(action.type) {
  case 'UPDATE_INPUT':
    if(action.newInput === '.' && state.expressionInput.includes('.')) return {...state};
    if(state.expressionRequested === '0') {
      state.expressionRequested = (action.newInput)
    } else {
      state.expressionRequested += (action.newInput);
    };
    const operators = '+-*/';
    const currInput = state.expressionInput;
    if(state.expressionInput === '0' || operators.includes(action.newInput) || operators.includes(currInput)) {
      state.expressionInput = (action.newInput);
    } else {
      state.expressionInput += (action.newInput);
    };
    return {...state};
  case 'CLEAR_INPUT':
    return { expressionInput: '0', expressionRequested: '0' };
  case 'CALCULATE':
    const result = expressionParser(state.expressionRequested);
    return { expressionInput: result, expressionRequested: result };
  default:
    return state;
 }
}

export default javaScriptCalculator;

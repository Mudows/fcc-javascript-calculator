const INITIAL_STATE = {
  expressionInput: 0,
  expressionRequested: 0,
  expressionResult: 0
};

const javaScriptCalculator = (state = INITIAL_STATE, action) => {
 switch(action.type) {
  case 'UPDATE_INPUT':
    state.expressionRequested += (action.newInput);
    return { ...state, expressionInput: action.newInput };
  case 'CLEAR_INPUT':
    return { expressionInput: '0', expressionRequested: '', expressionResult: 0 };
  case 'CALCULATE':
    const expression = Number(state.expressionRequested);
    state.expressionInput = expression;
    console.log(expression);
    return state;
  default:
    return state;
 }
}

export default javaScriptCalculator;

const INITIAL_STATE = {
  expressionInput: 'Input',
  expressionRequested: 'Requested',
  expressionResult: 0
};

const javaScriptCalculator = (state = INITIAL_STATE, action) => {
 switch(action.type) {
  case 'UPDATE_INPUT':
    return { ...state, expressionInput: action.newInput };
  default:
    return state;
 }
}

export default javaScriptCalculator;

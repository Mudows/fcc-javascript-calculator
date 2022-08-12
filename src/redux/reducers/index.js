import expressionParser from "../../helpers/expressionParser";

const INITIAL_STATE = {
  expressionInput: 0,
  expressionRequested: 0,
};

const javaScriptCalculator = (state = INITIAL_STATE, action) => {
 switch(action.type) {
  case 'UPDATE_INPUT':
    state.expressionRequested += (action.newInput);
    return { ...state, expressionInput: action.newInput };
  case 'CLEAR_INPUT':
    return { expressionInput: '0', expressionRequested: 0, expressionResult: 0 };
  case 'CALCULATE':
    return { ...state, expressionInput: expressionParser(state.expressionRequested) };
  default:
    return state;
 }
}

export default javaScriptCalculator;

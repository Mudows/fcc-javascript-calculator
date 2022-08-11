const INITIAL_STATE = {
  expressionInput: 'Input',
  expressionRequested: 'Requested',
  expressionResult: 0
};

const placeHolderReducer = (state = INITIAL_STATE, action) => {
 switch(action.type) {
   default:
    return state;
 }
}

export default placeHolderReducer;
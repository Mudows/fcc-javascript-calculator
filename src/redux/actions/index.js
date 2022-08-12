export const updateInput = (newInput) => ({
  type: 'UPDATE_INPUT',
  newInput,
});

export const clearExpressions = () => ({
  type: 'CLEAR_INPUT',
});

export const calculateResult = () => ({
  type: 'CALCULATE',
});

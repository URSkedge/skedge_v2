export const CHANGE_TERM = 'CHANGE_TERM';

export const changeTerm = (newTerm) => ({
  type: CHANGE_TERM,
  payload: newTerm
});
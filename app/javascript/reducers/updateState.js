import { ADD_COURSE } from '../actions/addCourse';
import { REMOVE_COURSE } from '../actions/removeCourse';
import { CHANGE_TERM } from '../actions/changeTerm';

export const updateState = (state = {}, action) => {
  switch (action.type) {
    case ADD_COURSE:
      state[action.payload.term] = state[action.payload.term] || [];
      state.term = action.payload.term;
      state[state.term].push(action.payload.course);
      return state;
    case REMOVE_COURSE:
      let index = state[action.payload.term].indexOf(action.payload.course);
      state[action.payload.term].splice(index, 1);
      return state;
    case CHANGE_TERM:
      state.term = action.payload;
      return state;
    default:
      return state;
  }
}
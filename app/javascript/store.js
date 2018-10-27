import { createStore } from 'redux'
import { updateState } from './reducers/updateState';

export const store = createStore(updateState);
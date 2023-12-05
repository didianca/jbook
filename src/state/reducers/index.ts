import CellsReducer from './cells.reducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  cells: CellsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;

import {combineReducers} from 'redux';
import words from '~/modules/words';

const rootReducer = combineReducers({
  words,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

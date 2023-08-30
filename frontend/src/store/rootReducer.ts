import { combineReducers } from 'redux';
import gamesListReducer from './features/gameListSlice';
import currentGameReducer from './features/currentGameSlice';

const rootReducer = combineReducers({
  games: gamesListReducer,
  currentGame: currentGameReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

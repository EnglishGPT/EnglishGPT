import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './user';
import examReducer from './exam';
import storyReducer from './story';

const rootReducer = combineReducers({
  user: userReducer,
  exam: examReducer,
  story: storyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

import { combineReducers } from 'redux';
import chatReducer from './chatReducer';
import menuReducer from './menuReducer';

const rootReducer = combineReducers({
  chat: chatReducer,
  menu: menuReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

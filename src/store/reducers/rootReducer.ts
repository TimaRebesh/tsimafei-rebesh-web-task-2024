import { combineReducers } from 'redux';
import chatReducer from './chatReducer';
import menuReducer from './menuReducer';
import selectedMessageReducer from './selectedMessageReducer';

const rootReducer = combineReducers({
  chat: chatReducer,
  menu: menuReducer,
  selectedMessage: selectedMessageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

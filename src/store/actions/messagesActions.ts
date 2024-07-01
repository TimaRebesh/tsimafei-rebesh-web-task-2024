import { MessageData } from 'types/types';
import { SELECT_MESSAGE } from '../constants';

export const selectMessage = (message: MessageData) => ({
  type: SELECT_MESSAGE,
  payload: message,
});

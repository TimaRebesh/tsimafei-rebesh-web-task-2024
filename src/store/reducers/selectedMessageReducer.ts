import { MessageData } from 'types/types';
import { SELECT_MESSAGE } from '../constants';

interface SelectedMessageState {
  selectedMessage: MessageData | null;
}

const initialState: SelectedMessageState = {
  selectedMessage: null,
};

const selectedMessageReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SELECT_MESSAGE:
      return { ...state, selectedMessage: action.payload };
    default:
      return state;
  }
};

export default selectedMessageReducer;

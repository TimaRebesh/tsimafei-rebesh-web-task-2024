import { Message } from 'types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChatState {
  messages: Message[];
}

const initialState: ChatState = {
  messages: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    fetchMessagesSuccess(state, action: PayloadAction<Message[]>) {
      state.messages = action.payload;
    },
    sendMessageSuccess(state, action: PayloadAction<Message>) {
      state.messages.push(action.payload);
    },
  },
});

export const { fetchMessagesSuccess, sendMessageSuccess } = chatSlice.actions;
export default chatSlice.reducer;

import { Comment } from 'types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChatState {
  comments: Comment[] | null;
}

const initialState: ChatState = {
  comments: null,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    fetchCommentsSuccess(state, action: PayloadAction<Comment[]>) {
      state.comments = action.payload;
    },
    sendCommentSuccess(state, action: PayloadAction<Comment>) {
      state.comments?.push(action.payload);
    },
  },
});

export const { fetchCommentsSuccess, sendCommentSuccess } = chatSlice.actions;
export default chatSlice.reducer;

// chatReducer.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment } from 'types/types';

interface ChatState {
  comments: Comment[] | null;
  pendingDeleteComments: string[];
  error: string | null;
}

const initialState: ChatState = {
  comments: null,
  pendingDeleteComments: [],
  error: null,
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
    deleteCommentRequest(state, action: PayloadAction<string>) {
      state.pendingDeleteComments.push(action.payload);
    },
    deleteCommentSuccess(state, action: PayloadAction<string>) {
      state.pendingDeleteComments = state.pendingDeleteComments.filter(
        (id) => id !== action.payload
      );
      state.comments =
        state.comments?.filter((comment) => comment.id !== action.payload) ||
        null;
    },
    deleteCommentFailure(state, action: PayloadAction<string>) {
      state.pendingDeleteComments = state.pendingDeleteComments.filter(
        (id) => id !== action.payload
      );
      state.error = action.payload;
    },
  },
});

export const {
  fetchCommentsSuccess,
  sendCommentSuccess,
  deleteCommentRequest,
  deleteCommentSuccess,
  deleteCommentFailure,
} = chatSlice.actions;
export default chatSlice.reducer;

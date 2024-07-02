import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment } from 'types/types';

interface ChatState {
  comments: Comment[] | null;
  pendingDeleteComments: string[];
  error: string | null;
  editingComment: Comment | null;
}

const initialState: ChatState = {
  comments: null,
  pendingDeleteComments: [],
  error: null,
  editingComment: null,
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
    setDeletingComment(state, action: PayloadAction<string>) {
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
    editCommentRequest(state, action: PayloadAction<Comment>) {
      state.editingComment = action.payload;
    },
    editCommentSuccess(state, action: PayloadAction<Comment>) {
      state.comments =
        state.comments?.map((comment) =>
          comment.id === action.payload.id ? action.payload : comment
        ) || null;
      state.editingComment = null;
    },
    editCommentFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.editingComment = null;
    },
    setEditingComment(state, action: PayloadAction<Comment | null>) {
      state.editingComment = action.payload;
    },
  },
});

export const {
  fetchCommentsSuccess,
  sendCommentSuccess,
  setDeletingComment,
  deleteCommentSuccess,
  deleteCommentFailure,
  editCommentRequest,
  editCommentSuccess,
  editCommentFailure,
  setEditingComment,
} = chatSlice.actions;
export default chatSlice.reducer;

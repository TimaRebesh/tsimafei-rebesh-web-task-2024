import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  SEND_COMMENT,
  SEND_COMMENT_SUCCESS,
  SEND_COMMENT_FAILURE,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
  EDIT_COMMENT_REQUEST,
  EDIT_COMMENT_SUCCESS,
  EDIT_COMMENT_FAILURE,
  SET_EDITING_COMMENT,
} from '../constants';
import { Comment } from 'types/types';

export const fetchComments = () => ({
  type: FETCH_COMMENTS,
});

// export const fetchCommentsSuccess = (messages: Comment[]) => ({
//   type: FETCH_COMMENTS_SUCCESS,
//   payload: messages,
// });

// export const fetchCommentsFailure = (error: string) => ({
//   type: FETCH_COMMENTS_FAILURE,
//   payload: error,
// });

// export const sendMessage = (
//   message: Omit<Comment, 'id' | 'dateAdded' | 'dateEdited'>
// ) => ({
//   type: SEND_COMMENT,
//   payload: message,
// });

// export const sendCommentSuccess = (message: Comment) => ({
//   type: SEND_COMMENT_SUCCESS,
//   payload: message,
// });

// export const sendCommentFailure = (error: string) => ({
//   type: SEND_COMMENT_FAILURE,
//   payload: error,
// });

export const deleteCommentRequest = (id: string) => ({
  type: DELETE_COMMENT_REQUEST,
  payload: id,
});

// export const deleteCommentSuccess = (id: string) => ({
//   type: DELETE_COMMENT_SUCCESS,
//   payload: id,
// });

// export const deleteCommentFailure = (error: string) => ({
//   type: DELETE_COMMENT_FAILURE,
//   payload: error,
// });

// export const editCommentRequest = (comment: Comment) => ({
//   type: EDIT_COMMENT_REQUEST,
//   payload: comment,
// });

// export const editCommentSuccess = (comment: Comment) => ({
//   type: EDIT_COMMENT_SUCCESS,
//   payload: comment,
// });

// export const editCommentFailure = (error: string) => ({
//   type: EDIT_COMMENT_FAILURE,
//   payload: error,
// });

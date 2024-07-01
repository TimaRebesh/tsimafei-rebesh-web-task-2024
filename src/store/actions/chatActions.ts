import { Comment } from 'types/types';
import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  SEND_COMMENT,
  SEND_COMMENT_SUCCESS,
  SEND_COMMENT_FAILURE,
} from '../constants';

export const fetchComments = () => ({
  type: FETCH_COMMENTS,
});

export const fetchCommentsSuccess = (messages: Comment[]) => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: messages,
});

export const fetchCommentsFailure = (error: string) => ({
  type: FETCH_COMMENTS_FAILURE,
  payload: error,
});

export const sendMessage = (
  message: Omit<Comment, 'id' | 'dateAdded' | 'dateEdited'>
) => ({
  type: SEND_COMMENT,
  payload: message,
});

export const sendCommentSuccess = (message: Comment) => ({
  type: SEND_COMMENT_SUCCESS,
  payload: message,
});

export const sendCommentFailure = (error: string) => ({
  type: SEND_COMMENT_FAILURE,
  payload: error,
});

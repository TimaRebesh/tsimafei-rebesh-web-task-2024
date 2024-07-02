import { FETCH_COMMENTS, DELETE_COMMENT_REQUEST } from '../constants';

export const fetchComments = () => ({
  type: FETCH_COMMENTS,
});

export const deleteCommentRequest = (id: string) => ({
  type: DELETE_COMMENT_REQUEST,
  payload: id,
});

import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchCommentsSuccess,
  sendCommentSuccess,
  deleteCommentSuccess,
  deleteCommentFailure,
  editCommentSuccess,
  editCommentFailure,
  setDeletingComment,
} from '../reducers/chatReducer';
import {
  FETCH_COMMENTS,
  SEND_COMMENT,
  DELETE_COMMENT_REQUEST,
  EDIT_COMMENT_REQUEST,
} from '../constants';
import { Comment } from 'types/types';

interface FetchMessagesAction {
  type: typeof FETCH_COMMENTS;
}

interface SendMessageAction {
  type: typeof SEND_COMMENT;
  payload: { name: string; text: string };
}

interface DeleteCommentAction {
  type: typeof DELETE_COMMENT_REQUEST;
  payload: string;
}

interface EditCommentAction {
  type: typeof EDIT_COMMENT_REQUEST;
  payload: Comment;
}

function* fetchComments(): Generator<any, void, { data: Comment[] }> {
  try {
    const response = yield call(axios.get, 'http://localhost:3001/comments');
    yield put(fetchCommentsSuccess(response.data));
  } catch (e) {
    console.error(e);
  }
}

function* sendComment(
  action: SendMessageAction
): Generator<any, void, { data: Comment }> {
  try {
    const response = yield call(axios.post, 'http://localhost:3001/comments', {
      name: action.payload.name,
      text: action.payload.text,
    });
    yield put(sendCommentSuccess(response.data));
  } catch (e) {
    console.error(e);
  }
}

function* deleteComment(
  action: DeleteCommentAction
): Generator<any, void, { data: boolean }> {
  yield put(setDeletingComment(action.payload));
  try {
    const response = yield call(
      axios.delete,
      `http://localhost:3001/comment/${action.payload}`
    );
    if (response.data) {
      yield put(deleteCommentSuccess(action.payload));
    } else {
      yield put(deleteCommentFailure('Failed to delete comment'));
    }
  } catch (e: any) {
    yield put(deleteCommentFailure(e.message));
  }
}

function* editComment(
  action: EditCommentAction
): Generator<any, void, { data: Comment }> {
  try {
    const response = yield call(
      axios.put,
      `http://localhost:3001/comment/${action.payload.id}`,
      action.payload
    );
    yield put(editCommentSuccess(response.data));
  } catch (e: any) {
    yield put(editCommentFailure(e.message));
  }
}

export function* chatSaga() {
  yield takeEvery(FETCH_COMMENTS, fetchComments);
  yield takeEvery(SEND_COMMENT, sendComment);
  yield takeEvery(DELETE_COMMENT_REQUEST, deleteComment);
  yield takeEvery(EDIT_COMMENT_REQUEST, editComment);
}

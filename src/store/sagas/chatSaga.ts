import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchCommentsSuccess,
  sendCommentSuccess,
} from '../reducers/chatReducer';
import { FETCH_COMMENTS, SEND_COMMENT } from '../constants';
import { Comment } from '@/types/types';

interface FetchMessagesAction {
  type: typeof FETCH_COMMENTS;
}

interface SendMessageAction {
  type: typeof SEND_COMMENT;
  payload: string;
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
      text: action.payload,
    });
    yield put(sendCommentSuccess(response.data));
  } catch (e) {
    console.error(e);
  }
}

export function* chatSaga() {
  yield takeEvery(FETCH_COMMENTS, fetchComments);
  yield takeEvery(SEND_COMMENT, sendComment);
}

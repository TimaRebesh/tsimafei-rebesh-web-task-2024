import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchMessagesSuccess,
  sendMessageSuccess,
} from '../reducers/chatReducer';
import { FETCH_MESSAGES, SEND_MESSAGE } from '../constants';
import { Message } from '@/types/types';

interface FetchMessagesAction {
  type: typeof FETCH_MESSAGES;
}

interface SendMessageAction {
  type: typeof SEND_MESSAGE;
  payload: string;
}

function* fetchMessages(): Generator<any, void, { data: Message[] }> {
  try {
    const response = yield call(axios.get, 'http://localhost:3001/comments');
    yield put(fetchMessagesSuccess(response.data));
  } catch (e) {
    console.error(e);
  }
}

function* sendMessage(
  action: SendMessageAction
): Generator<any, void, { data: Message }> {
  try {
    const response = yield call(axios.post, 'http://localhost:3001/comments', {
      text: action.payload,
    });
    yield put(sendMessageSuccess(response.data));
  } catch (e) {
    console.error(e);
  }
}

export function* chatSaga() {
  yield takeEvery(FETCH_MESSAGES, fetchMessages);
  yield takeEvery(SEND_MESSAGE, sendMessage);
}

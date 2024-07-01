import { Message } from 'types/types';
import {
  FETCH_MESSAGES,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAILURE,
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILURE,
} from '../constants';

export const fetchMessages = () => ({
  type: FETCH_MESSAGES,
});

export const fetchMessagesSuccess = (messages: Message[]) => ({
  type: FETCH_MESSAGES_SUCCESS,
  payload: messages,
});

export const fetchMessagesFailure = (error: string) => ({
  type: FETCH_MESSAGES_FAILURE,
  payload: error,
});

export const sendMessage = (
  message: Omit<Message, 'id' | 'dateAdded' | 'dateEdited'>
) => ({
  type: SEND_MESSAGE,
  payload: message,
});

export const sendMessageSuccess = (message: Message) => ({
  type: SEND_MESSAGE_SUCCESS,
  payload: message,
});

export const sendMessageFailure = (error: string) => ({
  type: SEND_MESSAGE_FAILURE,
  payload: error,
});

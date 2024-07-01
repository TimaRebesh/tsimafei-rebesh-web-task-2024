// src/data/messagesData.ts

import { MessageData } from 'types/types';

export const messagesData: MessageData[] = [
  {
    id: 100,
    user: {
      id: 1,
      name: 'Elmer Laverty',
      avatar:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    lastMessage: {
      date: 1573961291493,
      text: 'Haha oh man',
    },
    labels: [
      { type: 'question', text: 'Question' },
      { type: 'help', text: 'Help wanted' },
    ],
  },
  {
    id: 200,
    user: {
      id: 2,
      name: 'Florencio Dorrance',
      avatar:
        'https://images.pexels.com/photos/13235447/pexels-photo-13235447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    lastMessage: {
      date: 1573962291493,
      text: 'woohoooo',
    },
    labels: [{ type: 'default', text: 'Some content' }],
  },
  {
    id: 300,
    user: {
      id: 3,
      name: 'Lavern Laboy',
      avatar:
        'https://images.pexels.com/photos/609549/pexels-photo-609549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    lastMessage: {
      date: 1573963291493,
      text: "Haha that's terrifying",
    },
    labels: [
      { type: 'question', text: 'Bug' },
      { type: 'help', text: 'Hacktoberfest' },
    ],
  },
  {
    id: 400,
    user: {
      id: 4,
      name: 'Titus Kitamura',
      avatar:
        'https://images.pexels.com/photos/1009904/pexels-photo-1009904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    lastMessage: {
      date: 1573964291493,
      text: 'omg, this is amazing',
    },
    labels: [
      { type: 'question', text: 'Question' },
      { type: 'default', text: 'Some content' },
    ],
  },
  {
    id: 500,
    user: {
      id: 5,
      name: 'Geoffrey Mott',
      avatar:
        'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    lastMessage: {
      date: 1573965291493,
      text: 'aww',
    },
    labels: [{ type: 'question', text: 'Request' }],
  },
  {
    id: 600,
    user: {
      id: 6,
      name: 'Alfonzo Schuessler',
      avatar: '',
    },
    lastMessage: {
      date: 1573966291493,
      text: 'perfect!',
    },
    labels: [{ type: 'default', text: 'Follow up' }],
  },
];

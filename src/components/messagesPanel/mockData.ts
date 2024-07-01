import { MessageData } from '@/types/types';

export const messagesData: MessageData[] = [
  {
    id: 1,
    user: {
      name: 'Elmer Laverty',
      avatar:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    text: 'Haha oh man',
    time: '12m',
    labels: [
      { type: 'question', text: 'Question' },
      { type: 'help', text: 'Help wanted' },
    ],
  },
  {
    id: 2,
    user: {
      name: 'Florencio Dorrance',
      avatar:
        'https://images.pexels.com/photos/13235447/pexels-photo-13235447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    text: 'woohoooo',
    time: '24m',
    labels: [{ type: 'default', text: 'Some content' }],
  },
  {
    id: 3,
    user: {
      name: 'Lavern Laboy',
      avatar:
        'https://images.pexels.com/photos/609549/pexels-photo-609549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    text: "Haha that's terrifying",
    time: '1h',
    labels: [
      { type: 'question', text: 'Bug' },
      { type: 'help', text: 'Hacktoberfest' },
    ],
  },
  {
    id: 4,
    user: {
      name: 'Titus Kitamura',
      avatar:
        'https://images.pexels.com/photos/1009904/pexels-photo-1009904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    text: 'omg, this is amazing',
    time: '5h',
    labels: [
      { type: 'question', text: 'Question' },
      { type: 'default', text: 'Some content' },
    ],
  },
  {
    id: 5,
    user: {
      name: 'Geoffrey Mott',
      avatar:
        'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    text: 'aww',
    time: '2d',
    labels: [{ type: 'question', text: 'Request' }],
  },
  {
    id: 6,
    user: {
      name: 'Alfonzo Schuessler',
      avatar: '',
    },
    text: 'perfect!',
    time: '1m',
    labels: [{ type: 'default', text: 'Follow up' }],
  },
];

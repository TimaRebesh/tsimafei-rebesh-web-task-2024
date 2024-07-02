import { IFile, IUser, MessageData } from 'types/types';

export const currentUser: IUser = {
  id: 12234562323,
  name: 'User Cat',
  avatar:
    'https://images.pexels.com/photos/129753/pexels-photo-129753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  position: 'Market Development Manager',
};

export const messagesData: MessageData[] = [
  {
    id: 100,
    user: {
      id: 1,
      name: 'Tim',
      avatar:
        'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      position: 'Area Sales Manager',
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
      position: 'Administrator',
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
      position: 'Account Executive',
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
      position: 'Proposal Writer',
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
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      position: 'Nursing Assistant',
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
      position: 'Area Sales Manager',
    },
    lastMessage: {
      date: 1573966291493,
      text: 'perfect!',
    },
    labels: [{ type: 'default', text: 'Follow up' }],
  },
];

export const getUsers = (): IUser[] =>
  messagesData.map((message) => message.user);
export const getFiles = (): IFile[] => [
  { id: 200, name: 'i9.pdf', type: 'PDF', size: '9mb' },
  { id: 201, name: 'Screenshot-3817.png', type: 'PNG', size: '4mb' },
  { id: 202, name: 'sharefile.docx', type: 'DOC', size: '555kb' },
  { id: 203, name: 'Jerry-2020_I-9_Form.xxl', type: 'XXL', size: '24mb' },
];

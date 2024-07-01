export interface User {
  id: number;
  name: string;
  avatar: string;
}

export interface Label {
  type: 'default' | 'help' | 'question';
  text: string;
}

export interface LastMessage {
  date: number;
  text: string;
}

export interface MessageData {
  id: number;
  user: User;
  lastMessage: LastMessage;
  labels: Label[];
}

export interface Message {
  name: string;
  text: string;
  id: string;
  dateAdded: number;
  dateEdited: number;
}

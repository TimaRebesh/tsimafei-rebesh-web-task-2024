export interface IUser {
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
  user: IUser;
  lastMessage: LastMessage;
  labels: Label[];
}

export interface Comment {
  name: string;
  text: string;
  id: string;
  dateAdded: number;
  dateEdited: number;
}

export interface TransformedComments {
  name: string;
  isOwner: boolean;
  avatar: string;
  comments: Comment[];
}

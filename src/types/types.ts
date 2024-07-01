export interface User {
  name: string;
  avatar: string;
}

export interface Label {
  type: 'default' | 'help' | 'question';
  text: string;
}

export interface MessageData {
  id: number;
  user: User;
  text: string;
  time: string;
  labels: Label[];
}

export interface MessagesProps {
  messages: MessageData[];
}

export interface Message {
  id: number;
  text: string;
  timestamp: string;
}

/** @jsxImportSource @emotion/react */
import React, { ReactNode, useState } from 'react';
import { chatPanelStyles, chatInputStyles, chatButtonStyles } from './chatPanel.styles';
import MessageList from '../messageList/MessageList';

interface ChatPanelProps {
  children: ReactNode;
}

interface Message {
  id: number;
  text: string;
}

const ChatPanel: React.FC<ChatPanelProps> = ({ children }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = { id: Date.now(), text: message };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  return (
    <div css={chatPanelStyles}>
      <MessageList messages={messages} />
      <div css={chatInputStyles}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Введите сообщение..."
        />
        <button css={chatButtonStyles} onClick={handleSendMessage}>Отправить</button>
      </div>
    </div>
  );
};

export default ChatPanel;

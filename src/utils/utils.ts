import { Comment, MessageData, TransformedComments } from 'types/types';
import { currentUser, messagesData } from './mockData';

export const transformCommentsToFitData = (
  comments: Comment[]
): TransformedComments[] => {
  return comments.reduce((acc: TransformedComments[], comment, indx) => {
    const lastBlock = acc[acc.length - 1];
    const isSameUser = lastBlock && lastBlock.name === comment.name;

    if (isSameUser) {
      lastBlock.comments.push(comment);
    } else {
      const isOwner = comment.name === currentUser.name;
      const avatar = isOwner
        ? currentUser.avatar
        : messagesData.find((data) => data.user.name === comment.name)?.user
            .avatar || '';

      acc.push({
        id: indx,
        name: comment.name,
        isOwner,
        avatar,
        comments: [comment],
      });
    }

    return acc;
  }, []);
};

export const truncate = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }
  return text;
};

export const getTransformedData = (milliseconds: number): string => {
  const now = Date.now();
  const elapsed = now - milliseconds;

  const seconds = Math.floor(elapsed / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (seconds < 60) {
    return 'just now';
  } else if (minutes < 60) {
    return `${minutes}m`;
  } else if (hours < 24) {
    return `${hours}h`;
  } else if (days < 30) {
    return `${days}d`;
  } else if (months < 12) {
    return `${months}mon`;
  } else {
    return `${years}y`;
  }
};

export const getMessagesData = (comments: Comment[]): MessageData[] => {
  const data = messagesData;
  data[0].lastMessage.date = comments[comments.length - 1].dateEdited;
  data[0].lastMessage.text = comments[comments.length - 1].text;
  const dataWithActiveUser = JSON.parse(JSON.stringify(data));
  return dataWithActiveUser;
};

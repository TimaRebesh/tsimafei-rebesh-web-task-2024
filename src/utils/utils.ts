import { Comment, TransformedComments } from 'types/types';
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

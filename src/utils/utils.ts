import { Comment, TransformedComments } from 'types/types';
import { currentUser, messagesData } from './mockData';

export const transformCommentsToFitData = (
  comments: Comment[]
): TransformedComments[] => {
  return comments.reduce((acc: TransformedComments[], comment) => {
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
        name: comment.name,
        isOwner,
        avatar,
        comments: [comment],
      });
    }

    return acc;
  }, []);
};

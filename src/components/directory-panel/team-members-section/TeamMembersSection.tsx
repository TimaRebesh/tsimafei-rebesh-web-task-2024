import { IUser } from 'types/types';
import { Section } from '../section/Section';

export const TeamMembersSection = ({ members }: { members: IUser[]; }) => {
  const convertedData = members.map(({ id, name, avatar, position }) => ({
    id,
    name,
    src: avatar,
    description: position
  }));
  return <Section title="Team Members" elements={convertedData} />;
};

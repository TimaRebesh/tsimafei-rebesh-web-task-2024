/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { IUser } from 'types/types';
import { SectionTitle } from './SectionTitle';
import { Member } from './Member';

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 16px;
  gap: 8px;
  width: 362px;
`;

export const TeamMembersSection = ({ members }: { members: IUser[]; }) => (
  <SectionContainer>
    <SectionTitle title="Team Members" count={members.length} />
    {members.map(member => (
      <Member key={member.id} member={member} />
    ))}
  </SectionContainer>
);

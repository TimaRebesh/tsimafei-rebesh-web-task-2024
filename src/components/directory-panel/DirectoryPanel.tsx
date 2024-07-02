import { getUsers, getFiles } from 'utils/mockData';
import styled from '@emotion/styled';
import { Divider } from 'ui/divider';
import { TeamMembersSection } from './team-members-section/TeamMembersSection';
import { DirectoryHeader } from './DirectoryHeader';

const DirectoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 362px;
  box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.08);
  flex-shrink: 0;
  gap: 24px;
`;

export const DirectoryPanel = () => {

  const teamMembers = getUsers();
  const files = getFiles();

  return (
    <DirectoryContainer >
      <DirectoryHeader />
      <TeamMembersSection members={teamMembers} />
      <Divider />
      {/* <FileSection files={files} /> */}
    </DirectoryContainer>
  );
};

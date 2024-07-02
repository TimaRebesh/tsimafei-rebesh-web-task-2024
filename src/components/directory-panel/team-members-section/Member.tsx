/** @jsxImportSource @emotion/react */
import { Avatar } from "ui/avatar";
import styled from "@emotion/styled";
import { IUser } from "types/types";

const MemberContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px;
  gap: 16px;
  width: 100%;
  border-radius: 12px;
`;

const MemberDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 39px;
`;

const MemberRole = styled.div`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.4);
`;

export const Member = ({ member }: { member: IUser; }) => (
  <MemberContainer>
    <Avatar src={member.avatar} />
    <MemberDetailsContainer>
      <h4>{member.name}</h4>
      <MemberRole>{member.position}</MemberRole>
    </MemberDetailsContainer>
  </MemberContainer>
);
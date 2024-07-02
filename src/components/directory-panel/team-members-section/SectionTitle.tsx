/** @jsxImportSource @emotion/react */
import theme from "styles/theme";
import styled from "@emotion/styled";

const SectionTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 137px;
  height: 22px;
`;

const NumberContainer = styled.div`
  padding: 2px 8px;
  background: ${theme.colors.backgroundSecondary};
  border-radius: 24px;
  width: 24px;
  height: 22px;
`;

const NumberText = styled.div`
  font-weight: 600;
  font-size: 12px;
`;

export const SectionTitle = ({ title, count }: { title: string; count: number; }) => (
  <SectionTitleContainer>
    <h4>{title}</h4>
    <NumberContainer>
      <NumberText>{count}</NumberText>
    </NumberContainer>
  </SectionTitleContainer>
);
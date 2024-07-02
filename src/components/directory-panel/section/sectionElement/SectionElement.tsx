/** @jsxImportSource @emotion/react */
import React from "react";
import { Avatar } from "ui/avatar";
import styled from "@emotion/styled";
import { ISectionElement } from "types/types";
import { Icon } from "ui/Icon";
import { css } from "@emotion/react";
import theme from "styles/theme";

const ElementContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px;
  gap: 16px;
  width: 100%;
  border-radius: 12px;
`;

const ElementDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const DetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 39px;
`;

const Description = styled.div`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.4);
`;

const CustomIconWrapper = styled.div`
  border-radius: 12px;
`;

interface SectionElementProps {
  element: ISectionElement;
  downloadIcon?: boolean;
}

export const SectionElement: React.FC<SectionElementProps> = ({ element, downloadIcon }) => (
  <ElementContainer>
    {element.iconStyles ? (
      <CustomIconWrapper style={element.iconStyles.container}>
        <Icon src={element.src} styles={css`${element.iconStyles.img}`} />
      </CustomIconWrapper>
    ) : (
      <Avatar src={element.src} />
    )}
    <ElementDetailsContainer>
      <DetailsInfo>
        <h4>{element.name}</h4>
        <Description>{element.description}</Description>
      </DetailsInfo>
      {downloadIcon && <Icon src='assets/icons/receivesquare.svg' backgroundColor={theme.colors.primary} />}
    </ElementDetailsContainer>
  </ElementContainer>
);

/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import theme from 'styles/theme';

const PopupContainer = styled.div`
  position: absolute;
  right: 2px;
  top: -1px;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.background};
  border: 1px solid ${theme.colors.primary};
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const Popup = ({
  children,
  onClose,
}: {
  children: JSX.Element[];
  onClose: () => void;
}) => (
  <PopupContainer onMouseLeave={onClose}>
    {children}
  </PopupContainer>
);

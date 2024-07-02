import { css } from "@emotion/react";
import theme from "../../styles/theme";
import { Icon } from "../../ui/Icon";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedMenuItem } from "store/reducers/menuReducer";
import { RootState } from "store/reducers/rootReducer";

const MenuElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 48px;
`;

const LogoElement = styled.div`
   position: relative;
  width: 56px;
  height: 56px;
  background: ${theme.colors.primary};
  border-radius: 14px;
  cursor: pointer;

  &::after {
    content: 'Q';
    position: absolute;
    width: 15.75px;
    height: 31.5px;
    left: 20.12px;
    top: 12.25px;
    font-family: ${theme.fonts.secondary};
    font-weight: 700;
    font-size: 21px;
    line-height: 150%;
    color: ${theme.colors.background};
  }
`;

const IconsContainer = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  width: 24px;
  height: 248px;
`;

interface IMenuElement {
  id: string;
  src: string;
}

const menuElements: IMenuElement[] = [
  { id: '100', src: 'assets/icons/home2.svg' },
  { id: '200', src: 'assets/icons/message.svg' },
  { id: '300', src: 'assets/icons/chart21.svg' },
  { id: '400', src: 'assets/icons/searchnormal1.svg' },
  { id: '500', src: 'assets/icons/calendar2.svg' },
];

export const SidebarMenu: React.FC = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state: RootState) => state.menu.selectedItemId);

  return (
    <MenuElement>
      <LogoElement />
      <IconsContainer>
        {menuElements.map(el => (
          <Icon
            key={el.id}
            src={el.src}
            onClick={() => dispatch(setSelectedMenuItem(el.id))}
            {...(
              selected === el.id
                ? { styles: css`background-color: ${theme.colors.primary};` }
                : {})}
          />
        ))}
      </IconsContainer>
    </MenuElement>
  );
};
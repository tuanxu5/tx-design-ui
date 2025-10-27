import styled from "styled-components";
import colors from "../../theme/colors";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.flex ? "row" : "column")};
  height: ${props => props.height || "100vh"};
  min-height: ${props => props.minHeight || "100vh"};
`;

export const Header = styled.header`
  height: 64px;
  background: ${colors.bgFillLight};
  padding: 0 48px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
`;

export const Sider = styled.aside`
  background: ${colors.bgFillLight};
  width: ${props => props.width || "200px"};
  transition: all 0.3s;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.06);
`;

export const Content = styled.main`
  flex: 1;
  padding: 24px;
  overflow-y: auto;
  background: white;
`;

export const Footer = styled.footer`
  padding: 24px 48px;
  text-align: center;
  background: ${colors.bgFillLight};
  border-top: 1px solid ${colors.borderDefault};
`;

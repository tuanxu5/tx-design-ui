import styled from "styled-components";
import colors from "../../theme/colors";

const LinkStyled = styled.a`
  color: ${colors.primary};
  text-decoration: ${props => (props.underline ? "underline" : "none")};
  transition: color 0.2s;

  &:hover {
    color: ${colors.primaryHover};
  }

  &:visited {
    color: ${props => (props.visited ? colors.primaryVisited : "inherit")};
  }
`;

const TxLink = ({ href, children, underline = false, visited = false, ...props }) => {
  return (
    <LinkStyled href={href} underline={underline ? 1 : 0} visited={visited ? 1 : 0} {...props}>
      {children}
    </LinkStyled>
  );
};

export default TxLink;

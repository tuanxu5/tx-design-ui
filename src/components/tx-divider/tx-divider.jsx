import styled from "styled-components";
import colors from "../../theme/colors";

const DividerStyled = styled.hr`
  border: none;
  border-top: ${props => props.thickness || "1px"} solid ${colors.borderLight};
  margin: ${props => props.margin || "16px"} 0;
  ${props =>
    props.vertical &&
    `
    border-top: none;
    border-left: ${props.thickness || "1px"} solid ${colors.borderLight};
    display: inline-block;
    margin: 0 ${props.margin || "8px"};
    vertical-align: middle;
  `}
`;

const TxDivider = ({ vertical = false, thickness, margin, ...props }) => {
  return <DividerStyled vertical={vertical ? 1 : 0} thickness={thickness} margin={margin} {...props} />;
};

export default TxDivider;

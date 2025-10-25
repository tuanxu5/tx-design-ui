import PropTypes from "prop-types";
import { StyledBreadcrumbItem, StyledBreadcrumbSeparator, StyledBreadcrumbWrapper } from "./styled";

const TxBreadcrumb = ({ items = [], separator = "/", ...rest }) => {
  return (
    <StyledBreadcrumbWrapper {...rest}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <StyledBreadcrumbItem key={item.key || index} isLast={isLast}>
            {item.href ? <a href={item.href}>{item.label}</a> : <span>{item.label}</span>}
            {!isLast && <StyledBreadcrumbSeparator>{separator}</StyledBreadcrumbSeparator>}
          </StyledBreadcrumbItem>
        );
      })}
    </StyledBreadcrumbWrapper>
  );
};

TxBreadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.node.isRequired,
      href: PropTypes.string,
    })
  ),
  separator: PropTypes.node,
};

TxBreadcrumb.defaultProps = {
  items: [],
  separator: "/",
};

export default TxBreadcrumb;

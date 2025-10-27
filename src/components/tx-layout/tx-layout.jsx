import PropTypes from "prop-types";
import { LayoutContainer } from "./styled";

const TxLayout = ({ children, height, minHeight, flex, className }) => {
  return (
    <LayoutContainer height={height} minHeight={minHeight} flex={flex} className={className}>
      {children}
    </LayoutContainer>
  );
};

TxLayout.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flex: PropTypes.bool,
  className: PropTypes.string,
};

TxLayout.Header = ({ children, className }) => {
  const { Header } = require("./styled");
  return <Header className={className}>{children}</Header>;
};

TxLayout.Header.displayName = "TxLayout.Header";

TxLayout.Sider = ({ children, width, className }) => {
  const { Sider } = require("./styled");
  return (
    <Sider width={width} className={className}>
      {children}
    </Sider>
  );
};

TxLayout.Sider.displayName = "TxLayout.Sider";

TxLayout.Content = ({ children, className }) => {
  const { Content } = require("./styled");
  return <Content className={className}>{children}</Content>;
};

TxLayout.Content.displayName = "TxLayout.Content";

TxLayout.Footer = ({ children, className }) => {
  const { Footer } = require("./styled");
  return <Footer className={className}>{children}</Footer>;
};

TxLayout.Footer.displayName = "TxLayout.Footer";

export default TxLayout;

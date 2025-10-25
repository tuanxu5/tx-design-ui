import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { StyledAnchorLink, StyledAnchorWrapper } from "./styled";

const TxAnchor = ({ items = [], offsetTop = 0, ...rest }) => {
  const [activeKey, setActiveKey] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offsetTop + 10;

      // Find the active section
      for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i];
        const element = document.getElementById(item.key);

        if (element) {
          const elementTop = element.offsetTop;
          if (scrollPosition >= elementTop) {
            setActiveKey(item.key);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [items, offsetTop]);

  const handleClick = (e, key) => {
    e.preventDefault();
    const element = document.getElementById(key);

    if (element) {
      const elementPosition = element.offsetTop - offsetTop;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      setActiveKey(key);
    }
  };

  return (
    <StyledAnchorWrapper {...rest}>
      {items.map(item => (
        <StyledAnchorLink
          key={item.key}
          href={`#${item.key}`}
          active={activeKey === item.key}
          onClick={e => handleClick(e, item.key)}
        >
          {item.title}
        </StyledAnchorLink>
      ))}
    </StyledAnchorWrapper>
  );
};

TxAnchor.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.node.isRequired,
    })
  ),
  offsetTop: PropTypes.number,
};

TxAnchor.defaultProps = {
  items: [],
  offsetTop: 0,
};

export default TxAnchor;

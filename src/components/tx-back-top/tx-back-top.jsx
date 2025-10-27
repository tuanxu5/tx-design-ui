import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { BackTopButton } from "./styled";

const TxBackTop = ({ visibilityHeight = 400, right, bottom, onClick }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      setVisible(scrolled > visibilityHeight);
    };

    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, [visibilityHeight]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (onClick) {
      onClick();
    }
  };

  return (
    <BackTopButton visible={visible} right={right} bottom={bottom} onClick={scrollToTop} aria-label="Back to top">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="5 10 12 3 19 10" />
        <path d="M12 3v22" />
      </svg>
    </BackTopButton>
  );
};

TxBackTop.propTypes = {
  visibilityHeight: PropTypes.number,
  right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
};

export default TxBackTop;

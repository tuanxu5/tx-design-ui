import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { AffixContainer } from "./styled";

const TxAffix = ({ offsetTop = 0, offsetBottom, onChange, children, ...props }) => {
  const [fixed, setFixed] = useState(false);
  const affixRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !affixRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const targetOffset = offsetTop || 0;

      if (fixed) {
        if (containerRect.top < targetOffset && containerRect.bottom > targetOffset) {
          // Still within container, keep fixed
          return;
        }
        if (containerRect.bottom <= targetOffset) {
          // Scrolled past container, unfix
          setFixed(false);
          if (onChange) onChange(false);
        }
      } else {
        if (containerRect.top <= targetOffset) {
          // Should fix
          setFixed(true);
          if (onChange) onChange(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [offsetTop, fixed, onChange]);

  return (
    <div ref={containerRef} {...props}>
      <AffixContainer
        ref={affixRef}
        fixed={fixed}
        offsetTop={offsetTop}
        width={affixRef.current ? affixRef.current.offsetWidth : "auto"}
      >
        {children}
      </AffixContainer>
    </div>
  );
};

TxAffix.propTypes = {
  offsetTop: PropTypes.number,
  offsetBottom: PropTypes.number,
  onChange: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default TxAffix;

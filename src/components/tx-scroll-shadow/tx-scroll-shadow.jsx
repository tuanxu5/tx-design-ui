import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: ${props => props.height || "300px"};
  overflow: auto;
`;

const TopShadow = styled.div`
  position: sticky;
  top: 0;
  height: ${props => (props.show ? "20px" : "0")};
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, transparent 100%);
  pointer-events: none;
  transition: height 0.2s;
  z-index: 10;
`;

const BottomShadow = styled.div`
  position: sticky;
  bottom: 0;
  height: ${props => (props.show ? "20px" : "0")};
  background: linear-gradient(to top, rgba(0, 0, 0, 0.1) 0%, transparent 100%);
  pointer-events: none;
  transition: height 0.2s;
  z-index: 10;
`;

const TxScrollShadow = ({ children, height, ...props }) => {
  const [showTopShadow, setShowTopShadow] = useState(false);
  const [showBottomShadow, setShowBottomShadow] = useState(true);
  const containerRef = useRef(null);

  const checkScroll = () => {
    if (!containerRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    setShowTopShadow(scrollTop > 0);
    setShowBottomShadow(scrollTop + clientHeight < scrollHeight - 10);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      checkScroll();
      return () => container.removeEventListener("scroll", checkScroll);
    }
  }, []);

  return (
    <Container ref={containerRef} height={height} {...props}>
      <TopShadow show={showTopShadow ? 1 : 0} />
      {children}
      <BottomShadow show={showBottomShadow ? 1 : 0} />
    </Container>
  );
};

export default TxScrollShadow;

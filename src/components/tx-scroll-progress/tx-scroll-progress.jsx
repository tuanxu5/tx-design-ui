import { useEffect, useState } from "react";
import styled from "styled-components";
import colors from "../../theme/colors";

const ProgressBar = styled.div`
  position: ${props => (props.fixed ? "fixed" : "sticky")};
  top: ${props => props.top || "0"};
  left: 0;
  right: 0;
  height: ${props => props.height || "4px"};
  background: ${colors.bgFillLight};
  z-index: 1000;
`;

const ProgressFill = styled.div`
  height: 100%;
  width: ${props => props.progress}%;
  background: ${colors.primary};
  transition: width 0.1s linear;
`;

const TxScrollProgress = ({ fixed = true, top = "0", height = "4px", ...props }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
      setProgress(Math.min(100, Math.max(0, scrollPercent)));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ProgressBar fixed={fixed ? 1 : 0} top={top} height={height} {...props}>
      <ProgressFill progress={progress} />
    </ProgressBar>
  );
};

export default TxScrollProgress;

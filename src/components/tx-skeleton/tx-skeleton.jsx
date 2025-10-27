import styled, { keyframes } from "styled-components";
import colors from "../../theme/colors";

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const SkeletonBase = styled.div`
  background: linear-gradient(90deg, ${colors.bgFillLight} 25%, ${colors.bgFillMedium} 50%, ${colors.bgFillLight} 75%);
  background-size: 2000px 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: ${props => props.radius || "4px"};
`;

const TxSkeleton = ({ width = "100%", height = "20px", variant = "rect", radius, ...props }) => {
  const isCircle = variant === "circle";

  return (
    <SkeletonBase
      style={{
        width,
        height: isCircle ? width : height,
        borderRadius: isCircle ? "50%" : radius || "4px",
      }}
      {...props}
    />
  );
};

export default TxSkeleton;

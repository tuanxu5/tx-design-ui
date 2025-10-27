import { useState } from "react";
import styled from "styled-components";
import colors from "../../theme/colors";

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${props => props.radius || "8px"};
`;

const StyledImage = styled.img`
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "auto"};
  object-fit: ${props => props.objectFit || "cover"};
  display: block;
  transition: all 0.3s ease;

  &:hover {
    ${props =>
      props.zoom
        ? `
      transform: scale(1.05);
    `
        : ""}
  }
`;

const Placeholder = styled.div`
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "200px"};
  background: ${colors.bgFillLight};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.textSecondary};
  font-size: 14px;
`;

const TxImage = ({
  src,
  alt = "Image",
  width,
  height,
  radius = "8px",
  zoom = false,
  objectFit = "cover",
  placeholder,
  ...props
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  return (
    <ImageWrapper radius={radius}>
      {(loading || error) && (
        <Placeholder width={width} height={height}>
          {error ? placeholder || "Failed to load image" : "Loading..."}
        </Placeholder>
      )}
      {src && (
        <StyledImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          objectFit={objectFit}
          zoom={zoom ? 1 : 0}
          onLoad={handleLoad}
          onError={handleError}
          style={{ display: loading || error ? "none" : "block" }}
          {...props}
        />
      )}
    </ImageWrapper>
  );
};

export default TxImage;

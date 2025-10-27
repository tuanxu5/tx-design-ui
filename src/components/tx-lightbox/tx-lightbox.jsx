import styled from "styled-components";

const LightboxContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: ${props => (props.open ? 1 : 0)};
  visibility: ${props => (props.open ? "visible" : "hidden")};
  transition: all 0.3s ease;
`;

const LightboxImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 8px;
  object-fit: contain;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const TxLightbox = ({ open = false, src, onClose, ...props }) => {
  if (!open) return null;

  return (
    <LightboxContainer open={open} onClick={onClose} {...props}>
      <CloseButton onClick={onClose}>×</CloseButton>
      <LightboxImage src={src} onClick={e => e.stopPropagation()} />
    </LightboxContainer>
  );
};

export default TxLightbox;

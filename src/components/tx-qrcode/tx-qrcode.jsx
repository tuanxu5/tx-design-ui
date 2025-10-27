import React from "react";
import styled from "styled-components";
import colors from "../../theme/colors";

const QRCodeContainer = styled.div`
  display: inline-flex;
  padding: 16px;
  background: white;
  border-radius: 8px;
  border: 1px solid ${colors.borderLight};
`;

const QRCodeCanvas = styled.canvas`
  display: block;
`;

const TxQrcode = ({ value, size = 200, ...props }) => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !value) return;

    // Simple QR code visualization
    // In production, use a QR code library like 'qrcode.react' or similar
    const ctx = canvas.getContext("2d");

    // Clear canvas
    ctx.clearRect(0, 0, size, size);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, size, size);

    // Draw placeholder
    ctx.fillStyle = "black";
    ctx.font = "14px Arial";
    ctx.textAlign = "center";
    ctx.fillText("QR Code", size / 2, size / 2 - 10);
    ctx.fillText(value.substring(0, 20), size / 2, size / 2 + 10);

    // For now, just render a placeholder
    // In production, integrate with a QR code library
  }, [value, size]);

  return (
    <QRCodeContainer {...props}>
      <QRCodeCanvas ref={canvasRef} width={size} height={size} />
    </QRCodeContainer>
  );
};

export default TxQrcode;

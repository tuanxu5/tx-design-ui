import { useId } from "react";
import styled from "styled-components";
import colors from "../../theme/colors";

const MapContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: ${colors.bgFillLight};
`;
const TxMap = ({ src, center, zoom = 10, height = "400px", title, ...props }) => {
  const id = useId();
  const iframeTitle = title || `tx-map-${id}`;

  return (
    <MapContainer style={{ height }} {...props}>
      <iframe
        title={iframeTitle}
        src={src || `https://www.google.com/maps?q=${center}&z=${zoom}&output=embed`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </MapContainer>
  );
};

export default TxMap;

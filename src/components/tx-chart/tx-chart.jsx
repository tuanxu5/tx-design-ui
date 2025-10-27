import { useEffect, useRef } from "react";
import styled from "styled-components";
import colors from "../../theme/colors";

const ChartContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.bgFillLight};
  border-radius: 8px;
  padding: 24px;
`;

const TxChart = ({ type = "bar", data, options, width = "100%", height = "300px", ...props }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Chart rendering logic would go here
    // For now, just display the data structure
    if (chartRef.current) {
      console.log("Chart data:", data);
      console.log("Chart options:", options);
    }
  }, [data, options]);

  return (
    <ChartContainer ref={chartRef} style={{ width, height }} {...props}>
      <div style={{ textAlign: "center", color: colors.textSecondary }}>
        <p style={{ fontSize: "16px", fontWeight: "500" }}>Chart Component</p>
        <p style={{ fontSize: "14px", marginTop: "8px" }}>
          Chart type: {type} - Data visualization component (integrate with Chart.js or similar)
        </p>
      </div>
    </ChartContainer>
  );
};

export default TxChart;

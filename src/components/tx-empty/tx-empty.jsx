import styled from "styled-components";
import colors from "../../theme/colors";

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  color: ${colors.textSecondary};
  text-align: center;
`;

const EmptyImage = styled.div`
  font-size: 64px;
  margin-bottom: 16px;
  opacity: 0.3;
`;

const EmptyTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  color: ${colors.textPrimary};
`;

const EmptyDescription = styled.div`
  font-size: 14px;
  color: ${colors.textSecondary};
`;

const TxEmpty = ({ image = "📭", title = "No Data", description, ...props }) => {
  return (
    <EmptyContainer {...props}>
      <EmptyImage>{image}</EmptyImage>
      <EmptyTitle>{title}</EmptyTitle>
      {description && <EmptyDescription>{description}</EmptyDescription>}
    </EmptyContainer>
  );
};

export default TxEmpty;

import PropTypes from "prop-types";
import { StyledPaginationEllipsis, StyledPaginationItem, StyledPaginationWrapper } from "./styled";

const ChevronLeft = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const TxPagination = ({
  current = 1,
  total = 0,
  pageSize = 10,
  onChange,
  showSizeChanger = false,
  size = "medium",
  ...rest
}) => {
  const totalPages = Math.ceil(total / pageSize);

  const handlePageChange = page => {
    if (page < 1 || page > totalPages || page === current) return;
    if (onChange) {
      onChange(page, pageSize);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const showPages = 7; // Number of page buttons to show

    if (totalPages <= showPages) {
      // Show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <StyledPaginationItem key={i} active={i === current} onClick={() => handlePageChange(i)} size={size}>
            {i}
          </StyledPaginationItem>
        );
      }
    } else {
      // Show first page
      pages.push(
        <StyledPaginationItem key={1} active={current === 1} onClick={() => handlePageChange(1)} size={size}>
          1
        </StyledPaginationItem>
      );

      // Show ellipsis or pages
      if (current > 3) {
        pages.push(
          <StyledPaginationEllipsis key="ellipsis-start" size={size}>
            •••
          </StyledPaginationEllipsis>
        );
      }

      // Show middle pages
      const start = Math.max(2, current - 1);
      const end = Math.min(totalPages - 1, current + 1);

      for (let i = start; i <= end; i++) {
        pages.push(
          <StyledPaginationItem key={i} active={i === current} onClick={() => handlePageChange(i)} size={size}>
            {i}
          </StyledPaginationItem>
        );
      }

      // Show ellipsis or pages
      if (current < totalPages - 2) {
        pages.push(
          <StyledPaginationEllipsis key="ellipsis-end" size={size}>
            •••
          </StyledPaginationEllipsis>
        );
      }

      // Show last page
      pages.push(
        <StyledPaginationItem
          key={totalPages}
          active={totalPages === current}
          onClick={() => handlePageChange(totalPages)}
          size={size}
        >
          {totalPages}
        </StyledPaginationItem>
      );
    }

    return pages;
  };

  return (
    <StyledPaginationWrapper {...rest}>
      <StyledPaginationItem onClick={() => handlePageChange(current - 1)} disabled={current === 1} size={size}>
        <ChevronLeft />
      </StyledPaginationItem>

      {renderPageNumbers()}

      <StyledPaginationItem onClick={() => handlePageChange(current + 1)} disabled={current === totalPages} size={size}>
        <ChevronRight />
      </StyledPaginationItem>
    </StyledPaginationWrapper>
  );
};

TxPagination.propTypes = {
  current: PropTypes.number,
  total: PropTypes.number,
  pageSize: PropTypes.number,
  onChange: PropTypes.func,
  showSizeChanger: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

TxPagination.defaultProps = {
  current: 1,
  total: 0,
  pageSize: 10,
  showSizeChanger: false,
  size: "medium",
};

export default TxPagination;

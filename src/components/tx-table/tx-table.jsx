import PropTypes from "prop-types";
import {
  StyledEmptyText,
  StyledTable,
  StyledTableCell,
  StyledTableHead,
  StyledTableHeader,
  StyledTableRow,
  StyledTableWrapper,
} from "./styled";

const TxTable = ({
  columns = [],
  dataSource = [],
  size = "medium",
  bordered = true,
  hoverable = true,
  emptyText = "No data",
  ...rest
}) => {
  return (
    <StyledTableWrapper bordered={bordered} {...rest}>
      <StyledTable>
        <StyledTableHead>
          <StyledTableRow>
            {columns.map((column, index) => (
              <StyledTableHeader key={column.key || index} align={column.align} size={size}>
                {column.title}
              </StyledTableHeader>
            ))}
          </StyledTableRow>
        </StyledTableHead>
        <tbody>
          {dataSource.length > 0 ? (
            dataSource.map((record, rowIndex) => (
              <StyledTableRow key={record.key || rowIndex} hoverable={hoverable}>
                {columns.map((column, colIndex) => (
                  <StyledTableCell key={column.key || colIndex} align={column.align} size={size}>
                    {column.render
                      ? column.render(record[column.dataIndex], record, rowIndex)
                      : record[column.dataIndex]}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length}>
                <StyledEmptyText>{emptyText}</StyledEmptyText>
              </td>
            </tr>
          )}
        </tbody>
      </StyledTable>
    </StyledTableWrapper>
  );
};

TxTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      dataIndex: PropTypes.string,
      key: PropTypes.string,
      align: PropTypes.oneOf(["left", "center", "right"]),
      render: PropTypes.func,
    })
  ),
  dataSource: PropTypes.array,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  bordered: PropTypes.bool,
  hoverable: PropTypes.bool,
  emptyText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

TxTable.defaultProps = {
  columns: [],
  dataSource: [],
  size: "medium",
  bordered: true,
  hoverable: true,
  emptyText: "No data",
};

export default TxTable;

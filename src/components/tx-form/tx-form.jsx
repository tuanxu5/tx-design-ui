import PropTypes from "prop-types";
import { FormControl, FormError, FormFooter, FormHelp, FormItem, FormLabel, FormWrapper } from "./styled";

export const TxForm = ({ layout = "vertical", onSubmit, children, className, ...props }) => {
  const handleSubmit = e => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit} className={className} {...props}>
      {children}
    </FormWrapper>
  );
};

TxForm.propTypes = {
  layout: PropTypes.oneOf(["horizontal", "vertical"]),
  onSubmit: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
};

TxForm.defaultProps = {
  layout: "vertical",
  onSubmit: undefined,
  children: null,
  className: "",
};

export const TxFormItem = ({
  label,
  required = false,
  error = "",
  help = "",
  layout = "vertical",
  colon = true,
  noMargin = false,
  children,
  className,
  ...props
}) => {
  return (
    <FormItem layout={layout} noMargin={noMargin} className={className} {...props}>
      {label && (
        <FormLabel layout={layout} required={required} colon={colon}>
          {label}
        </FormLabel>
      )}
      <FormControl>
        {children}
        {error && (
          <FormError>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            {error}
          </FormError>
        )}
        {!error && help && <FormHelp>{help}</FormHelp>}
      </FormControl>
    </FormItem>
  );
};

TxFormItem.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
  help: PropTypes.string,
  layout: PropTypes.oneOf(["horizontal", "vertical"]),
  colon: PropTypes.bool,
  noMargin: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

TxFormItem.defaultProps = {
  label: "",
  required: false,
  error: "",
  help: "",
  layout: "vertical",
  colon: true,
  noMargin: false,
  children: null,
  className: "",
};

export const TxFormFooter = ({
  align = "left",
  layout = "vertical",
  labelWidth = "120px",
  children,
  className,
  ...props
}) => {
  return (
    <FormFooter align={align} layout={layout} labelWidth={labelWidth} className={className} {...props}>
      {children}
    </FormFooter>
  );
};

TxFormFooter.propTypes = {
  align: PropTypes.oneOf(["left", "center", "right"]),
  layout: PropTypes.oneOf(["horizontal", "vertical"]),
  labelWidth: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

TxFormFooter.defaultProps = {
  align: "left",
  layout: "vertical",
  labelWidth: "120px",
  children: null,
  className: "",
};

TxForm.Item = TxFormItem;
TxForm.Footer = TxFormFooter;

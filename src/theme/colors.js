/**
 * Color Palette for TX Design UI
 * Central color management for consistent theming across components
 */

const colors = {
  // Primary Colors
  primary: "#03030f",
  primaryLight: "#03030f30", // 30% opacity for shadows/hovers
  primaryBorder: "#0e0e13ff",

  // Danger/Error Colors
  danger: "#e45649",
  dangerLight: "#e4564920", // 20% opacity for backgrounds
  dangerLighter: "#e4564915", // 15% opacity for lighter backgrounds
  dangerShadow: "#e4564930", // 30% opacity for shadows
  dangerHover: "#e4564950", // 50% opacity for hover states

  // Success Colors
  success: "#52c41a",

  // Warning Colors
  warning: "#faad14",

  // Info Colors
  info: "#1890ff",

  // Link/Accent Colors
  link: "#1fa9ff",
  linkLight: "#1fa9ff30", // 30% opacity for shadows
  linkLighter: "#1fa9ff50", // 50% opacity for hover states

  // Text Colors
  textPrimary: "#1c252e",
  textSecondary: "#8c9bab",
  textTertiary: "#9ca3af",
  textDisabled: "#a0a1a7",
  textWhite: "#ffffff",

  // Background Colors
  bgWhite: "#ffffff",
  bgPrimary: "#03030f",
  bgFill: "#f7f8fa",
  bgFillLight: "#f3f4f6",
  bgDisabled: "#f3f3f4",
  bgPrimaryLight: "#03030f10", // 10% opacity
  bgPrimaryLighter: "#03030f20", // 20% opacity

  // Border Colors
  borderLight: "#eef0f1",
  borderDefault: "#d1d5db",
  borderDisabled: "#a0a1a7",
  borderFocus: "#d1d5db",
  borderHover: "#9ca3af",

  // Gradient Colors
  gradientPurple: "#6253e1",
  gradientBlue: "#04befe",

  // Placeholder Colors
  placeholder: "#8c9bab",

  // Shadow Colors
  shadowDefault: "#03030f30", // 30% opacity
};

// Theme object for more structured access
export const theme = {
  colors,
  button: {
    primary: {
      bg: colors.primary,
      color: colors.textWhite,
      border: colors.primaryBorder,
      hover: {
        opacity: 0.8,
        shadow: `0px 0px 8px 2px ${colors.primaryLight}`,
      },
    },
    secondary: {
      bg: colors.bgWhite,
      color: colors.primary,
      border: colors.primary,
      hover: {
        bg: colors.primary,
        color: colors.textWhite,
      },
    },
    danger: {
      bg: colors.danger,
      color: colors.textWhite,
      border: colors.danger,
      hover: {
        shadow: `0px 0px 8px 2px ${colors.dangerShadow}`,
      },
    },
    disabled: {
      bg: colors.bgDisabled,
      color: colors.textDisabled,
      border: colors.borderDisabled,
    },
  },
  input: {
    default: {
      bg: "transparent",
      color: colors.textPrimary,
      border: colors.borderLight,
      placeholder: colors.placeholder,
    },
    fill: {
      bg: colors.bgFill,
    },
    disabled: {
      bg: colors.bgFillLight,
      color: colors.textDisabled,
    },
    status: {
      success: colors.success,
      warning: colors.warning,
      error: colors.danger,
      info: colors.info,
    },
  },
  checkbox: {
    default: {
      bg: colors.bgWhite,
      border: colors.borderDefault,
      checked: {
        bg: colors.primary,
        border: colors.primary,
      },
      hover: {
        border: colors.borderHover,
      },
    },
    danger: {
      checked: {
        bg: colors.danger,
        border: colors.danger,
      },
    },
    disabled: {
      bg: colors.bgFillLight,
      bgChecked: colors.borderDefault,
      border: colors.borderDefault,
    },
  },
};

// Export individual colors for direct access
export default colors;

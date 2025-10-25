/**
 * Example usage of TX Design UI colors
 * This file demonstrates how to use the centralized color system
 */

import styled from "styled-components";
import colors, { theme } from "./colors";

// Example 1: Using individual colors
const StyledCard = styled.div`
  background-color: ${colors.bgWhite};
  border: 1px solid ${colors.borderDefault};
  color: ${colors.textPrimary};
  padding: 20px;
  border-radius: 8px;

  &:hover {
    border-color: ${colors.primary};
    box-shadow: 0 2px 8px ${colors.primaryLight};
  }
`;

// Example 2: Using theme object for buttons
const StyledCustomButton = styled.button`
  background-color: ${theme.button.primary.bg};
  color: ${theme.button.primary.color};
  border: 1px solid ${theme.button.primary.border};
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    opacity: ${theme.button.primary.hover.opacity};
    box-shadow: ${theme.button.primary.hover.shadow};
  }

  &.danger {
    background-color: ${theme.button.danger.bg};
    border-color: ${theme.button.danger.border};

    &:hover {
      box-shadow: ${theme.button.danger.hover.shadow};
    }
  }

  &:disabled {
    background-color: ${theme.button.disabled.bg};
    color: ${theme.button.disabled.color};
    border-color: ${theme.button.disabled.border};
    cursor: not-allowed;
  }
`;

// Example 3: Using colors in component props
const Alert = styled.div`
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid;

  ${props => {
    switch (props.type) {
      case "success":
        return `
          background-color: ${colors.success}15;
          border-color: ${colors.success};
          color: ${colors.success};
        `;
      case "warning":
        return `
          background-color: ${colors.warning}15;
          border-color: ${colors.warning};
          color: ${colors.warning};
        `;
      case "danger":
        return `
          background-color: ${colors.dangerLight};
          border-color: ${colors.danger};
          color: ${colors.danger};
        `;
      case "info":
      default:
        return `
          background-color: ${colors.info}15;
          border-color: ${colors.info};
          color: ${colors.info};
        `;
    }
  }}
`;

// Example 4: Theming with variants
const Badge = styled.span`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;

  ${props => {
    const variants = {
      primary: {
        bg: colors.primary,
        color: colors.textWhite,
      },
      secondary: {
        bg: colors.bgPrimaryLighter,
        color: colors.primary,
      },
      success: {
        bg: colors.success,
        color: colors.textWhite,
      },
      danger: {
        bg: colors.danger,
        color: colors.textWhite,
      },
    };

    const variant = variants[props.variant] || variants.primary;

    return `
      background-color: ${variant.bg};
      color: ${variant.color};
    `;
  }}
`;

// Example 5: Dynamic theming
const ThemedContainer = styled.div`
  /* Use CSS variables for easy theming */
  --color-primary: ${colors.primary};
  --color-danger: ${colors.danger};
  --color-success: ${colors.success};
  --color-text: ${colors.textPrimary};
  --color-border: ${colors.borderDefault};

  /* Apply in child elements */
  .title {
    color: var(--color-text);
    border-bottom: 2px solid var(--color-primary);
  }

  .error {
    color: var(--color-danger);
  }

  .success {
    color: var(--color-success);
  }
`;

// Export examples for use in other files
export { StyledCard, StyledCustomButton, Alert, Badge, ThemedContainer };

// Usage example in a React component:
/*
import React from 'react';
import { StyledCard, Alert, Badge } from './theme/example';

function MyComponent() {
  return (
    <div>
      <StyledCard>
        <h2>Card Title</h2>
        <p>Card content with themed colors</p>
      </StyledCard>

      <Alert type="success">Operation successful!</Alert>
      <Alert type="danger">An error occurred!</Alert>

      <Badge variant="primary">Primary</Badge>
      <Badge variant="danger">Danger</Badge>
    </div>
  );
}
*/

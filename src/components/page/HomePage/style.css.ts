import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const formContainer = style({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  padding: "40px 0",
  justifyContent: "center",
  boxSizing: "border-box",
});

export const formContent = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 24,
  width: "100%",
  maxWidth: 600,
  height: "fit-content",
  backgroundColor: vars.color.background,
  boxSizing: "border-box",
  "@media": {
    "(max-width: 768px)": {
      gap: 16,
      padding: 0,
      width: "auto",
    },
  },
});

export const formTitleText = style({
  color: vars.color.textPrimary,
  fontSize: 14,
  maxWidth: 600,
  width: "100%",
  height: "fit-content",
  padding: "16px 20px",
  fontWeight: 700,
  borderBottom: `1px solid ${vars.color.border}`,
  "@media": {
    "(max-width: 768px)": {
      fontSize: 14,
      width: "calc(100% - 40px)",
    },
  },
});

export const inputContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  maxWidth: 600,
  width: "100%",
  boxSizing: "border-box",
  height: "fit-content",
  "@media": {
    "(max-width: 768px)": {
      gap: 4,
      width: "100%",
    },
  },
});

export const contactInput = style({
  all: "unset",
  width: "100%",
  padding: "8px 16px",
  borderRadius: 8,
  fontSize: 14,
  color: vars.color.textPrimary,
  border: `1px solid ${vars.color.textSecondary}`,
  boxSizing: "border-box",
  transition: "border-color 0.3s ease-in-out",
  ":focus": {
    border: `1px solid ${vars.color.primary}`,
  },
});

export const inputLabel = style({
  color: vars.color.textPrimary,
  fontSize: 14,
  fontWeight: 700,
  "@media": {
    "(max-width: 768px)": {
      fontSize: 13,
    },
  },
});

export const radiosContainer = style({
  display: "block",
  flexWrap: "wrap",
  gap: 16,
  width: "100%",
});

export const radioContainer = style({
  display: "flex",
  alignItems: "center",
  gap: 8,
  color: vars.color.textPrimary,
  fontSize: "14px",
  padding: "8px 0px",
  fontWeight: 500,
  cursor: "pointer",
});

export const inputButton = style({
  margin: 0,
  width: 20,
  height: 20,
  borderRadius: "50%",
  border: `1px solid ${vars.color.textSecondary}`,
  transition: "border-color 0.3s ease-in-out",
  accentColor: vars.color.primary,
  ":checked": {
    border: `1px solid ${vars.color.primary}`,
    backgroundColor: vars.color.primary,
  },
  ":focus": {
    border: `1px solid ${vars.color.backgroundLight}`,
  },
});

export const buttonContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 6,
  maxWidth: 600,
  width: "100%",
  borderRadius: 8,
  cursor: "pointer",
  backgroundColor: vars.color.background,
  boxSizing: "border-box",
  border: `1px solid ${vars.color.textSecondary}`,
  color: vars.color.primary,
  outline: "none",
  transition: "color 0.3s linear",
  selectors: {
    '&[aria-disabled="true"]': {
      color: vars.color.textSecondary,
      cursor: "not-allowed",
    },
  },
  ":hover": {
    backgroundColor: vars.color.background,
  },
  ":focus": {
    border: `1px solid ${vars.color.primary}`,
  },
  "@media": {
    "(max-width: 768px)": {
      width: "100%",
    },
  },
});

export const buttonText = style({
  fontSize: 14,
  fontWeight: 700,
  "@media": {
    "(max-width: 768px)": {
      fontSize: 13,
    },
  },
});

export const noRequired = style({
  color: vars.color.textSecondary,
  fontSize: 12,
  fontWeight: 500,
  paddingLeft: 10,
});

export const formErrorMessage = style({
  color: vars.color.error,
  fontSize: 12,
  fontWeight: 500,
  paddingLeft: 10,
});

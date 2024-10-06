import { globalStyle } from "@vanilla-extract/css";

import { vars } from "@/styles/theme.css";

globalStyle("html, body", {
  margin: 0,
  boxSizing: "border-box",
  backgroundColor: vars.color.background,
  fontFamily: vars.font.notoSansJp,
  scrollPaddingTop: "100px",
});

globalStyle("input, textarea, button", { fontFamily: vars.font.notoSansJp });

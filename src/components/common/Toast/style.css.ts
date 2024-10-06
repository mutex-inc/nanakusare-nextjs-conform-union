import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const errorToast = style({
  color: vars.color.textPrimary,
  width: 'fit-content',
  height: '48px',
  fontSize: '14px',
  fontWeight: '500',
  marginTop: '100px',
  marginLeft: '170px',
  '@media': {
    '(max-width: 768px)': {
      fontSize: '12px',
      height: '36px',
    },
  },
});

export const bodyDesign = style({
  color: vars.color.textPrimary,
  width: 'fit-content',
});

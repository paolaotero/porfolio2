export const DEFAULT_FONT_SIZE = 16;

export const px2rems = (px: number): string => `${px / DEFAULT_FONT_SIZE}rem`;

export const spacing = {
  sp006: px2rems(6),
  sp010: px2rems(10),
  sp016: px2rems(16),
  sp024: px2rems(24),
  sp032: px2rems(32),
  sp064: px2rems(64),
} as const;

export const font = {
  fn014: px2rems(14),
  fn016: px2rems(16),
  fn020: px2rems(20),
  fn024: px2rems(24),
} as const;

export const colors = {
  white: "#FFFFFF",
  black: "#000000",
  blue: "#D2E4F4",
} as const;

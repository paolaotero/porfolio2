export const DEFAULT_FONT_SIZE = 16;

export const px2rems = (px: number): string => `${px / DEFAULT_FONT_SIZE}rem`;

export const spacing = {
  sp010: px2rems(10),
  sp016: px2rems(16),
  sp024: px2rems(24),
  sp032: px2rems(32),
  sp064: px2rems(64),
} as const;

export const font = {
  fn016: px2rems(16),
  fn024: px2rems(24),
  fn020: px2rems(20),
} as const;

export const colors = {
  white: "#FFFFFF",
  black: "#000000",
  blue: "#D2E4F4",
} as const;

export const DEFAULT_FONT_SIZE = 16;

export const px2rems = (px: number): string => `${px / DEFAULT_FONT_SIZE}rem`;

export const spacing = {
  sp016: px2rems(16),
} as const;

export const colors = {
  white: "#FFFFFF",
  black: "#000000",
  blue: "#D2E4F4",
} as const;

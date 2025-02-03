import { Fonts } from '@src/styles';

const fontWeights = {
  bold: '700',
  semiBold: '600',
  medium: '500',
  regular: '400',
  thin: '300',
} as const;

const fontBold = {
  fontFamily: Fonts.bold,
  fontWeight: '700',
} as const;

const fontSemiBold = {
  fontFamily: Fonts.semiBold,
  fontWeight: '600',
} as const;

const fontMedium = {
  fontFamily: Fonts.medium,
  fontWeight: '500',
} as const;

const fontRegular = {
  fontFamily: Fonts.regular,
  fontWeight: '400',
} as const;

const fontThin = {
  fontFamily: Fonts.thin,
  fontWeight: '300',
} as const;

const fontConfig = {
  fontFamily: 'Inter',
} as const;

export const fontPaperConfig = {
  fontBold,
  fontSemiBold,
  fontThin,
  fontMedium,
  fontConfig,
  fontWeights,
  fontRegular,
};

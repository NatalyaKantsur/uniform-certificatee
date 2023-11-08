import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { useUniformCurrentComposition } from '@uniformdev/canvas-react';
import type { RootComponentInstance } from '@uniformdev/canvas';
import { appFonts } from '../fonts';
import { generateCustomTheme } from '../utilities/theme';

type Props = PropsWithChildren<{
  data?: RootComponentInstance | null;
  defaultTheme?: Types.ThemeValue | null;
}>;

const ThemeProvider: FC<Props> = ({ children, data, defaultTheme }) => {
  const { data: currentComposition } = useUniformCurrentComposition();

  const composition = data || currentComposition;

  const compositionHeader = composition?.slots?.pageHeader?.[0];

  const font = compositionHeader?.parameters?.primaryFont?.value as Types.SupportedFonts;
  const currentFont = appFonts[font];

  const themeName =
    (compositionHeader?.parameters?.theme?.value as Types.ThemeValue)?.themeName || defaultTheme?.themeName;

  const colors = (compositionHeader?.parameters?.theme?.value as Types.ThemeValue)?.colors || defaultTheme?.colors;

  const generatedTheme = generateCustomTheme(themeName, colors);

  return (
    // The way how we can set current theme
    <div
      className={classNames('min-h-screen overflow-x-hidden flex flex-col', currentFont?.className)}
      data-theme={themeName}
    >
      <div dangerouslySetInnerHTML={{ __html: generatedTheme }} />
      {children}
    </div>
  );
};

export default ThemeProvider;

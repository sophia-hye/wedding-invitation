type Color = 'Default' | 'Cream' | 'Tiffany' | 'Charcoal';
type FontSize = 'F48' | 'F32' | 'F24' | 'F18';
type TextTransform = 'none' | 'capitalize' | 'uppercase' | 'lowercase';
type BoxShape = 'rect' | 'roundRect' | 'circle';

type CssStyle = {
  size?: FontSize;
  textTransform?: TextTransform;
  textColor?: Color;
  bgColor?: Color;
  shape?: BoxShape;
  rowSpan?: number;
  colSpan?: number;
};

type Data = {
  src: string;
  text: string;
};

type TextBoxStyle = Pick<
  CssStyle,
  'size' | 'textTransform' | 'textColor' | 'bgColor' | 'shape'
>;

type GridItemStyle = Pick<CssStyle, 'rowSpan' | 'colSpan'>;

type GridImageInfo = Omit<Data & GridItemStyle, 'text'>;

type GridTextInfo = Omit<Data & TextBoxStyle & GridItemStyle, 'src'>;

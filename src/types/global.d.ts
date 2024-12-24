type ColorType = 'Default' | 'Cream' | 'Tiffany' | 'Charcoal';

type HeaderType = 'H1' | 'H2' | 'H3' | 'H4';
type SizeType = 'F48' | 'F32' | 'F24' | 'F18';

type TextTransformType = 'none' | 'capitalize' | 'uppercase' | 'lowercase';

type BoxShapeType = 'rect' | 'roundRect' | 'circle';

type GridTextInfoType = {
  text: string;
  size?: SizeType;
  textTransform?: TextTransformType;
  textColor?: ColorType;
  bgColor?: ColorType;
  shape?: BoxShapeType;
  rowSpan?: number;
  colSpan?: number;
};

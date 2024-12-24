import GridItem from '@/components/atoms/GridItem';
import TextBox from '@/components/molecules/TextBox';

interface GridTextItemProps {
  text: string;
  size?: SizeType;
  textTransform?: TextTransformType;
  textColor?: ColorType;
  bgColor?: ColorType;
  shape?: BoxShapeType;
  rowSpan?: number;
  colSpan?: number;
}

export default function GridTextItem({
  text,
  size,
  textTransform,
  textColor,
  bgColor,
  shape,
  rowSpan,
  colSpan,
}: GridTextItemProps) {
  return (
    <GridItem rowSpan={rowSpan} colSpan={colSpan}>
      <TextBox
        size={size}
        textTransform={textTransform}
        textColor={textColor}
        bgColor={bgColor}
        shape={shape}
      >
        {text}
      </TextBox>
    </GridItem>
  );
}

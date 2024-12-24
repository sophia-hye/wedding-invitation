import GridItem from '@/components/atoms/GridItem';
import TextBox from '@/components/molecules/TextBox';

export default function GridTextItem({
  text,
  size,
  textTransform,
  textColor,
  bgColor,
  shape,
  rowSpan,
  colSpan,
}: GridTextInfo) {
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

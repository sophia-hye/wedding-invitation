import GridItem from '@/components/atoms/GridItem';
import ResponsiveImage from '@/components/atoms/ResponsiveImage';

export default function GridImageItem({
  src,
  rowSpan,
  colSpan,
}: GridImageInfo) {
  return (
    <GridItem rowSpan={rowSpan} colSpan={colSpan}>
      <ResponsiveImage imagePath={src} />
    </GridItem>
  );
}

import GridItem from '../atoms/GridItem';
import ResponsiveImage from '../atoms/ResponsiveImage';

interface GridImageItemProps {
  src: string;
  rowSpan?: number;
  colSpan?: number;
}

export default function GridImageItem({
  src,
  rowSpan,
  colSpan,
}: GridImageItemProps) {
  return (
    <GridItem rowSpan={rowSpan} colSpan={colSpan}>
      <ResponsiveImage imagePath={src} />
    </GridItem>
  );
}

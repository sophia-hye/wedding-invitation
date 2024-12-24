import GridItem from '@/components/atoms/GridItem';
import ResponsiveImage from '@/components/atoms/ResponsiveImage';

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

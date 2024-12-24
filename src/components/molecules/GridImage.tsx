import GridContainer from '../atoms/GridContainer';
import GridImageItem from './GridImageItem';

interface ResponsiveGridProps {
  imageInfos: {
    src: string;
    rowSpan?: number;
    colSpan?: number;
  }[];
}






export default function ResponsiveGrid({ imageInfos }: ResponsiveGridProps) {
  return (
    <GridContainer>
      {imageInfos.map((info, index) => (
        <GridImageItem
          key={`grid-image-item-${index}`}
          src={info.src}
          rowSpan={info?.rowSpan}
          colSpan={info?.colSpan}
        />
      ))}
    </GridContainer>
  );
}

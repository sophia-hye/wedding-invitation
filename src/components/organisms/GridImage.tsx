import GridContainer from '@/components/atoms/GridContainer';
import GridImageItem from '@/components/molecules/GridImageItem';

interface GridImageProps {
  imageInfos: {
    src: string;
    rowSpan?: number;
    colSpan?: number;
  }[];
}

export default function GridImage({ imageInfos }: GridImageProps) {
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

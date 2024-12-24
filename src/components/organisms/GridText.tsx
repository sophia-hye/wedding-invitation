import GridContainer from '@/components/atoms/GridContainer';
import GridTextItem from '@/components/molecules/GridTextItem';

interface GridTextProps {
  columns: number;
  textInfos: GridTextInfoType[];
}

export default function GridText({ columns, textInfos }: GridTextProps) {
  return (
    <GridContainer columns={columns}>
      {textInfos.map((info, index) => (
        <GridTextItem
          key={`grid-text-item-${index}`}
          text={info.text}
          size={info.size}
          textTransform={info.textTransform}
          textColor={info.textColor}
          bgColor={info.bgColor}
          rowSpan={info.rowSpan}
          colSpan={info.colSpan}
        />
      ))}
    </GridContainer>
  );
}

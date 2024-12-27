import WEDDING from '@/constants/ko/wedding';
import TextBox from '@/components/molecules/TextBox';

export default function When({ size, textTransform, textColor }: TextBoxStyle) {
  const date = `${WEDDING.Month}월 ${WEDDING.Day}일 ${WEDDING.DaysOfTheWeek}`;
  const time = `${WEDDING.Time}`;

  return (
    <TextBox size={size} textTransform={textTransform} textColor={textColor}>
      {date}
      {time}
    </TextBox>
  );
}

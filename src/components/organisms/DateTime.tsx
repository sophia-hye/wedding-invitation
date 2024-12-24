import WEDDING from '@/constants/ko/wedding';
import Paragraph from '../molecules/Paragraph';

export default function DateTime() {
  const dateAndTime = `${WEDDING.Month}월 ${WEDDING.Day}일 ${WEDDING.DaysOfTheWeek} ${WEDDING.Time}`;

  return <Paragraph type={'Default'}>{dateAndTime}</Paragraph>;
}

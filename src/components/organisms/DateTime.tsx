import WEDDING from '@/constants/ko/wedding';
import TextBox from '@/components/molecules/TextBox';

export default function DateTime() {
  const dateAndTime = `${WEDDING.Month}월 ${WEDDING.Day}일 ${WEDDING.DaysOfTheWeek} ${WEDDING.Time}`;

  return <TextBox>{dateAndTime}</TextBox>;
}

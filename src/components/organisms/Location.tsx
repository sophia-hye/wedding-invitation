import WEDDING from '@/constants/ko/wedding';
import Paragraph from '../molecules/Paragraph';

export default function Location() {
  const locationAndFloor = `${WEDDING.Location} ${WEDDING.Floor}`;

  return (
    <Paragraph type={'Default'}>{locationAndFloor}</Paragraph>
  )
}

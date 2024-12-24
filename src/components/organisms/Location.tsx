import WEDDING from '@/constants/ko/wedding';
import TextBox from '@/components/molecules/TextBox';

export default function Location() {
  const locationAndFloor = `${WEDDING.Location} ${WEDDING.Floor}`;

  return <TextBox>{locationAndFloor}</TextBox>;
}

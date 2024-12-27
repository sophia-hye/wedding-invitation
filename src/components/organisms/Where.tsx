import WEDDING from '@/constants/ko/wedding';
import TextBox from '@/components/molecules/TextBox';

export default function Where({
  size,
  textTransform,
  textColor,
}: TextBoxStyle) {
  const locationAndFloor = `${WEDDING.Location} ${WEDDING.Floor}`;

  return (
    <TextBox size={size} textTransform={textTransform} textColor={textColor}>
      {locationAndFloor}
    </TextBox>
  );
}

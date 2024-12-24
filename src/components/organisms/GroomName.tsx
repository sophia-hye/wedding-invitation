import React from 'react';
import TextBox from '@/components/molecules/TextBox';
import GROOM from '@/constants/en/groom';

export default function GroomName({
  size,
  textTransform,
  textColor,
}: TextBoxStyle) {
  return (
    <TextBox size={size} textTransform={textTransform} textColor={textColor}>
      {GROOM.FirstName}
    </TextBox>
  );
}

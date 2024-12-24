import React from 'react';
import TextBox from '@/components/molecules/TextBox';
import BRIDE from '@/constants/en/bride';

export default function BrideName({
  size,
  textTransform,
  textColor,
}: TextBoxStyle) {
  return (
    <TextBox size={size} textTransform={textTransform} textColor={textColor}>
      {BRIDE.FirstName}
    </TextBox>
  );
}

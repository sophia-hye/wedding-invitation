import TextBox from '@/components/molecules/TextBox';
import Message from '@/components/organisms/Message';
import React from 'react';

export default function RSVP() {
  const title = 'invitation';
  return (
    <>
      <TextBox size="F24" textTransform="uppercase" textColor="Cream">
        {title}
      </TextBox>
      <Message />
    </>
  );
}

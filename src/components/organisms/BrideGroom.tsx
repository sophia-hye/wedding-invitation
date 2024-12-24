import { Fragment } from 'react';
import GROOM from '@/constants/en/groom';
import BRIDE from '@/constants/en/bride';
import TextBox from '@/components/molecules/TextBox';

export default function BrideGroom() {
  return (
    <Fragment>
      <TextBox>{GROOM.FirstName.toUpperCase()}</TextBox>
      <TextBox>{BRIDE.FirstName.toUpperCase()}</TextBox>
    </Fragment>
  );
}

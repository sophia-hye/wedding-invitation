import React from 'react';
import BackgroundImage from '../atoms/BackgroundImage';
import BrideName from '../organisms/BrideName';
import GroomName from '../organisms/GroomName';
import COVER from '@/constants/ko/cover';
import TextBox from '../molecules/TextBox';
import styled from 'styled-components';
import Where from '../organisms/Where';
import When from '../organisms/When';

export default function Cover() {
  const { Title, BgImagePath } = COVER;
  return (
    <BackgroundImage imagePath={BgImagePath}>
      <StyledWrapper>
        <TextBox size="F48">{Title}</TextBox>
        <GroomName size="F48" textTransform="uppercase" textColor="Tiffany" />
        <BrideName size="F48" textTransform="uppercase" textColor="Tiffany" />
        <Where />
        <When />
      </StyledWrapper>
    </BackgroundImage>
  );
}

const StyledWrapper = styled.div`
  > *:first-child {
    margin-top: 16px;
    margin-bottom: 48px;
  }

  > *:last-child {
    margin-top: 48px;
    margin-bottom: 16px;
  }

  > *:not(:first-child):not(:last-child) {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;

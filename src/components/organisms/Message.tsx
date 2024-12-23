import { Fragment } from 'react';
import styled from 'styled-components';
import Paragraph from '../molecules/Paragraph';
import formatMessage from '@/utils/formatter';

export default function Message() {
  const message = formatMessage();
  return (
    <Fragment>
      <StyledDiv>
        {message.map((pharagraph, index) => (
          <div key={`message-pharagraph-${index}`} className="">
            <Paragraph type={'Default'}>{pharagraph}</Paragraph>
          </div>
        ))}
      </StyledDiv>
    </Fragment>
  );
}

const StyledDiv = styled.div`
  display: flex;
  display-direction: column;
  gap: 24px;
  width: 50vw;
  text-align: center;

  p {
    white-space: pre-wrap;
    line-height: 1.8;
  }
`;

import styled from 'styled-components';
import formatMessage from '@/utils/formatter';
import TextBox from '@/components/molecules/TextBox';

export default function Message() {
  const message = formatMessage();

  return (
    <StyledDiv>
      {message.map((pharagraph, index) => (
        <TextBox key={`message-pharagraph-${index}`}>{pharagraph}</TextBox>
      ))}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 50vw;
  text-align: center;

  p {
    white-space: pre-wrap;
    line-height: 1.8;
  }
`;

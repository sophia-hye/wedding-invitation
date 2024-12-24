import styled from 'styled-components';
import BgContainer from '@/components/atoms/BgContainer';
import Typography from '@/components/atoms/Typography';

interface TextBoxProps extends TextBoxStyle {
  children: React.ReactNode;
}

export default function TextBox({
  size,
  textTransform,
  textColor,
  bgColor,
  shape,
  children,
}: TextBoxProps) {
  return (
    <StyledHeader size={size} textTransform={textTransform}>
      <BgContainer bgColor={bgColor} shape={shape}>
        <Typography textColor={textColor}>{children}</Typography>
      </BgContainer>
    </StyledHeader>
  );
}

const StyledHeader = styled.div<{
  size?: FontSize;
  textTransform?: TextTransform;
}>`
  font-weight: bold;

  text-transform: ${({ textTransform }) => textTransform ?? 'none'};

  font-size: ${({ size }) => {
    switch (size) {
      case 'F48':
        return '48px';
      case 'F32':
        return '32px';
      case 'F24':
        return '24px';
      case 'F18':
        return '18px';
      default:
        return '16px';
    }
  }};
`;

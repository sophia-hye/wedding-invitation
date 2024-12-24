import styled from 'styled-components';
import BgContainer from '../atoms/BgContainer';
import Typography from '../atoms/Typography';

interface TextBoxProps {
  size?: SizeType;
  textTransform?: TextTransformType;
  textColor?: ColorType;
  bgColor?: ColorType;
  children: React.ReactNode;
}

export default function TextBox({
  size,
  textTransform,
  textColor,
  bgColor,
  children,
}: TextBoxProps) {
  return (
    <StyledHeader size={size} textTransform={textTransform}>
      <BgContainer bgColor={bgColor}>
        <Typography textColor={textColor}>{children}</Typography>
      </BgContainer>
    </StyledHeader>
  );
}

const StyledHeader = styled.div<{
  size?: SizeType;
  textTransform?: TextTransformType;
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

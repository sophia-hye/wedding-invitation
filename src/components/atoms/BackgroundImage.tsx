import Image from 'next/image';
import styled from 'styled-components';

interface BackgroundImageProps {
  imagePath: string;
  children: React.ReactNode;
}

export default function BackgroundImage({
  imagePath,
  children,
}: BackgroundImageProps) {
  return (
    <BackgroundWrapper>
      <StyledImage
        src={`/cover/${imagePath}`}
        alt={`background-image-${imagePath}`}
        layout="fill"
        quality={100}
      />
      {children}
    </BackgroundWrapper>
  );
}

const BackgroundWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: -1;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

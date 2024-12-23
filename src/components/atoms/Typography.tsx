import styled from 'styled-components';

type ParagraphyType = 'Default' | 'CreamBg' | 'TiffanyBg';

const Typography = styled.p<{ type: ParagraphyType }>`
  ${({ type }) => {
    switch (type) {
      case 'CreamBg':
        return `
          background-color: var(--creamWhite);
          color: var(--charcoalGray);
        `;
      case 'TiffanyBg':
        return `
          background-color: var(--tiffanyBlue);
          color: var(--charcoalGray);
        `;
      default:
        return `
        `;
    }
  }}
`;

export default Typography;
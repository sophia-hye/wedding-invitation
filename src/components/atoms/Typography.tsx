import styled from 'styled-components';

const Typography = styled.p<{
  textColor?: Color;
}>`
  ${({ textColor }) => {
    switch (textColor) {
      case 'Cream':
        return `
          color: var(--creamWhite);
        `;
      case 'Tiffany':
        return `
          color: var(--tiffanyBlue);
        `;
      case 'Charcoal':
        return `
            color: var(--charcoalGray)
          `;
      default:
        return `
        `;
    }
  }}
`;

export default Typography;

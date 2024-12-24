import styled from 'styled-components';

const BgContainer = styled.div<{
  bgColor?: ColorType;
}>`
  ${({ bgColor }) => {
    switch (bgColor) {
      case 'Cream':
        return `
          background-color: var(--creamWhite);
        `;
      case 'Tiffany':
        return `
          background-color: var(--tiffanyBlue);
        `;
      case 'Charcoal':
        return `
          background-color: var(--charcoalGray)
        `;
      default:
        return `
        `;
    }
  }}
`;

export default BgContainer;

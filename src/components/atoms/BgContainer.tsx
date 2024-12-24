import styled from 'styled-components';

const BgContainer = styled.div<{
  bgColor?: ColorType;
  shape?: BoxShapeType;
}>`
  background-color: ${({ bgColor }) => {
    switch (bgColor) {
      case 'Cream':
        return `var(--creamWhite)`;
      case 'Tiffany':
        return `var(--tiffanyBlue)`;
      case 'Charcoal':
        return `var(--charcoalGray)`;
      default:
        return `none`;
    }
  }};

  border-radius: ${({ shape }) => {
    switch (shape) {
      case 'circle':
        return '50%';
      case 'roundRect':
        return '8px';
      case 'rect':
      default:
        return '0px';
    }
  }};
`;

export default BgContainer;

// ${({ bgColor }) => {
//   switch (bgColor) {
//     case 'Cream':
//       return `
//         background-color: var(--creamWhite);
//       `;
//     case 'Tiffany':
//       return `
//         background-color: var(--tiffanyBlue);
//       `;
//     case 'Charcoal':
//       return `
//         background-color: var(--charcoalGray)
//       `;
//     default:
//       return `
//       `;
//   }
// }}

import styled from 'styled-components';

const GridItem = styled.div<GridItemStyle>`
  --rowSpan: ${({ rowSpan }) => (rowSpan ? rowSpan : 1)};
  --colSpan: ${({ colSpan }) => (colSpan ? colSpan : 1)};

  grid-row: var(--rowSpan);
  grid-column: var(--colSpan);

  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export default GridItem;

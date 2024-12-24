import styled from 'styled-components';

interface GridItemProps {
  rowSpan?: number;
  colSpan?: number;
}

const GridItem = styled.div<GridItemProps>`
  --rowSpan: ${({ rowSpan }) => (rowSpan ? rowSpan : 1)};
  --colSpan: ${({ colSpan }) => (colSpan ? colSpan : 1)};

  grid-row: var(--rowSpan);
  grid-column: var(--colSpan);

  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export default GridItem;

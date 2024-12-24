import styled, { css } from 'styled-components';

const getGridLayout = (columns?: number, squareSize?: string) => {
  if (columns && columns > 0) {
    return {
      columns: `repeat(${columns}, 1fr)`,
      rows: `auto`,
    };
  }
  return {
    columns: `repeat(auto-fit, minmax(${squareSize}, 1fr))`,
    rows: `minmax(${squareSize}, auto)`,
  };
};

// 미디어 쿼리 설정
const mediaQueries = {
  desktop: (columns?: number) => getGridLayout(columns, '500px'),
  tablet: (columns?: number) => getGridLayout(columns, '300px'),
  mobile: (columns?: number) => getGridLayout(columns, '200px'),
};

const GridContainer = styled.div<{ columns?: number }>`
  display: grid;
  gap: 16px;

  ${({ columns }) => {
    const { columns: gridColumns, rows: gridRows } =
      mediaQueries.desktop(columns);
    return css`
      grid-template-columns: ${gridColumns};
      grid-template-rows: ${gridRows};
    `;
  }}

  @media (max-width: 1024px) {
    ${({ columns }) => {
      const { columns: gridColumns, rows: gridRows } =
        mediaQueries.tablet(columns);
      return css`
        grid-template-columns: ${gridColumns};
        grid-template-rows: ${gridRows};
      `;
    }}
  }

  @media (max-width: 768px) {
    ${({ columns }) => {
      const { columns: gridColumns, rows: gridRows } =
        mediaQueries.mobile(columns);
      return css`
        grid-template-columns: ${gridColumns};
        grid-template-rows: ${gridRows};
      `;
    }}
  }
`;

export default GridContainer;

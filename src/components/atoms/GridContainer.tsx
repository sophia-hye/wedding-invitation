import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-template-rows: minmax(500px, auto);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: minmax(300px, auto);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-rows: minmax(200px, auto);
  }
`;

export default GridContainer;

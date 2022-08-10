import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  max-width: 96rem;
  margin: 0 auto;
  gap: 3rem;
`;

export const Content = styled.div`
  h2 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fonts.sizes.superlarge};
    text-align: center;
    margin-bottom: 7rem;
  }
`;

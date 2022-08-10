import styled from 'styled-components';

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 96rem;
  margin: 10rem auto;
  gap: 5rem;

  img {
    width: 100%;
  }
`;

export const PresentationText = styled.div`
  color: ${({ theme }) => theme.colors.white};
  h2 {
    font-size: ${({ theme }) => theme.spacings.superlarge};
  }
  p {
    font-size: ${({ theme }) => theme.spacings.large};
  }

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.spacings.medium};
  }
`;

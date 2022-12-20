import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  max-width: 72rem;
  margin: 0 auto;
  text-align: center;
  padding-top: 4rem;
  span {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fonts.sizes.large};
  }

  h2 {
    margin-bottom: 2rem;
    font-size: ${({ theme }) => theme.fonts.sizes.superlarge};
  }

  @media (max-width: 800px) {
    padding: 2rem;
  }
`;

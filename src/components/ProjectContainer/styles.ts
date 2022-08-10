import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 1rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  h3 {
    font-size: ${({ theme }) => theme.fonts.sizes.large};
    padding: 1rem;
  }

  p {
    font-size: ${({ theme }) => theme.fonts.sizes.small};
    padding: 1rem;
  }

  img {
    width: 100%;
    padding: 1rem;
  }
`;

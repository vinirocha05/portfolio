import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.sizes.large};
  max-width: 70rem;
  margin: 0 auto;
  text-align: center;
  span {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fonts.sizes.large};
  }
`;

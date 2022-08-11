import styled from 'styled-components';

export const IconsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  cursor: pointer;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 96rem;
  margin: 0 auto;
  gap: 3rem;
  margin-top: 10rem;
`;

export const SkillDetails = styled.div`
  span {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fonts.sizes.large};
    text-align: center;
  }
  h2 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fonts.sizes.superlarge};
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fonts.sizes.small};
  }
`;

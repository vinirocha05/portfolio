import styled from 'styled-components';

export const IconsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  cursor: pointer;
  place-items: center;

  @media (max-width: 800px) {
    margin: 0 auto;
    gap: 2rem;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 96rem;
  margin: 0 auto;
  gap: 3rem;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
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

  @media (max-width: 800px) {
    margin: 0 auto;
    padding: 2rem;
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
  }
`;

export const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.sizes.superlarge};
  text-align: center;
  margin-top: 10rem;
  margin-bottom: 4rem;
`;

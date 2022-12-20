import styled from 'styled-components';

export const Content = styled.section`
  color: ${({ theme }) => theme.colors.white};
  max-width: 100rem;
  max-width: 100rem;
  margin: 0 auto;
  img {
    max-width: 40px;
    margin: 2rem 0;
  }

  h3 {
    font-size: ${({ theme }) => theme.fonts.sizes.medium};
    margin-bottom: 2rem;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));

  div {
    padding: 1rem 2rem;
    border-radius: 3rem;
    transition: all ease-in 200ms;
    margin: 0 1rem;
    :hover {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }

  p {
    font-size: ${({ theme }) => theme.fonts.sizes.small};
    color: #e5d5e5;
  }
`;

export const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.sizes.superlarge};
  text-align: center;
  padding: 5rem 0;
`;

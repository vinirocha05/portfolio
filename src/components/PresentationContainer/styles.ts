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

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;

    img {
      padding: 2rem;
    }
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
    font-size: ${({ theme }) => theme.fonts.sizes.medium};
  }

  @media (max-width: 800px) {
    padding: 2rem;
  }
`;

export const GithubLink = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  max-width: 20rem;
  color: black;
  border-radius: 0.9rem;
  margin-top: 2rem;
  transition: 0.5s all ease-in-out;

  cursor: pointer;
  img {
    width: 2rem;
  }
  a {
    margin-left: 2rem;
    font-size: ${({ theme }) => theme.fonts.sizes.small};
  }

  :hover {
    transform: scale(1.05);
  }
`;
export const LinkedinLink = styled.div`
  padding: 1rem;
  background-color: #0e76a8;
  display: flex;
  align-items: center;
  max-width: 20rem;
  color: black;
  border-radius: 0.9rem;
  cursor: pointer;
  margin-top: 2rem;
  transition: 0.5s all ease-in-out;
  img {
    width: 2rem;
  }
  a {
    margin-left: 2rem;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fonts.sizes.small};
  }

  :hover {
    transform: scale(1.05);
  }
`;

export const WhatsappLink = styled.div`
  padding: 1rem;
  background-color: #25d366;
  color: #f5f5f5;
  display: flex;
  align-items: center;
  max-width: 20rem;
  color: black;
  border-radius: 0.9rem;
  cursor: pointer;
  margin-top: 2rem;
  transition: 0.5s all ease-in-out;
  img {
    width: 2rem;
  }
  a {
    margin-left: 2rem;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fonts.sizes.small};
  }

  :hover {
    transform: scale(1.05);
  }
`;

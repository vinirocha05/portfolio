import styled from 'styled-components';

export const SkillContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 1rem;
  width: 10rem;
  margin-bottom: 10rem;

  img {
    width: 100%;
    padding: 1rem;
    border-radius: 1rem;
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  :hover {
    border: 1px solid ${({ theme }) => theme.colors.white};
    transform: translateY(0px);
    animation: float 5s ease-in-out infinite;
  }
`;

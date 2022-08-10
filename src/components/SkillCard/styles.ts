import styled from 'styled-components';

export const SkillContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 1rem;
  width: 10rem;
  height: 10rem;
  margin-bottom: 10rem;
  img {
    width: 100%;
    padding: 1rem;
  }
`;

import styled from 'styled-components';

export const Header = styled.header`
  height: 5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Content = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 96rem;
  margin: 2rem auto;
  font-size: ${({ theme }) => theme.spacings.medium};
  ul {
    list-style: none;
    display: flex;
  }
  ul li {
    margin: 0 2rem;
    :after {
      border-radius: 5px;
      left: 0%;
      width: 0;
      height: 4px;
      background-color: ${({ theme }) => theme.colors.primary};
      display: block;
      content: '';
      transition: 0.5s ease-in-out;
    }
    :hover:after {
      width: 100%;
    }
  }
`;

import styled from 'styled-components';

export const FooterContainer = styled.footer`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  margin: 5rem 0;
  span {
    color: red;
  }
`;

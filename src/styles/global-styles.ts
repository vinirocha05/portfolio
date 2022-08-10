import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

*{
  outline: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box
}

html{
  font-size: 62.5%;
}

body {
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.colors.dark}
  }

  a{
    text-decoration: none;
    color: inherit
  }
`;

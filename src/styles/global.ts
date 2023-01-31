import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Nunito', sans-serif;
    background-color: ${(props) => props.theme['base-background']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1.6rem 'Nunito', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme['base-title']}
  }

  strong {
    color: ${({ theme }) => theme['base-subtitle']}
  }

`

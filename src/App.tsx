import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { PostContextProvider } from './contexts/PostsContext'
import { Router } from './Router'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <PostContextProvider>
          <Router />
        </PostContextProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}

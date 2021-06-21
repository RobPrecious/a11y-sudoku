import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
html {
}

body{
  max-width: 80%;
  margin: 0 auto;
  font-family:Verdana;
}
`

const theme = {
    colors: {
        primary: '#fafafa',
    },
}
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}
export default MyApp

import 'styles/tailwind.css'
import 'styles/main.css'
import { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
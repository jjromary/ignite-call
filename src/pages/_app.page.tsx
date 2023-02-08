import type { AppProps } from 'next/app'
import { globaStyles } from '../styles/global'

globaStyles()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

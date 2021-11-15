import '../styles/globals.css'
import Layout from '../components/Layout'
import { ReactElement, ReactNode } from 'react'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { NextPage } from 'next'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}
type appPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
function MyApp({ Component, pageProps }: appPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(<Component {...pageProps} />)
}

export default MyApp

import type { AppProps } from "next/app";
import { GoogleAnalytics } from '@next/third-parties/google'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'

import "@/styles/globals.css";
import Layout from "@/components/layout";
 
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
 
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
  const isProduction = process.env.NODE_ENV === "production";
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || '';
 
  return getLayout(
    <Layout>
      <>
        <Component {...pageProps} />
        {isProduction && gaId && (
          <GoogleAnalytics gaId={gaId} />
        )}
      </>
    </Layout>
  )
}
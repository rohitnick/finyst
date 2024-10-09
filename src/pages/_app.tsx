import type { AppProps } from "next/app";
import { GoogleAnalytics } from '@next/third-parties/google'

import "@/styles/globals.css";


export default function App({ Component, pageProps }: AppProps) {
  const isProduction = process.env.NODE_ENV === "production";
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || '';

  return (<>
    <Component {...pageProps} />
    {isProduction && gaId && (
      <GoogleAnalytics gaId={gaId} />
    )}
  </>);
}

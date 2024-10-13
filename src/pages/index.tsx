import Head from "next/head";
import { Inter as FontSans } from 'next/font/google'

import LandingPage from "@/components/landing-page";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export default function Home() {
  return (
    <div className={cn('font-sans antialiased', fontSans.variable)}>
      <Head>
        {/* Primary Meta Tags */}
        <title>Finyst | Revolutionizing Financial Research with AI</title>
        <meta name="title" content="Finyst AI | AI-native Financial Research Platform" />
        <meta
          name="description"
          content="Finyst is an AI-native financial research platform that simplifies and accelerates stock analysis and investment decision-making. We combine advanced AI algorithms with real-time financial data to generate in-depth, customized research reports that empower investors to make informed choices. With an intuitive interface and powerful insights, Finyst democratizes high-performance financial analysis, allowing users to focus on what truly matters—strategic, data-driven investments."
        />
        <meta name="keywords" content="Finyst, financial research, AI, stock analysis, AI-powered insights, investment, market data, fintech" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Finyst" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://finyst.com" />
        <meta property="og:title" content="Finyst AI | Financial Research Platform" />
        <meta
          property="og:description"
          content="Transform your financial research with Finyst, an AI-powered platform designed for smarter, faster, and more intuitive stock analysis."
        />
        <meta property="og:image" content="https://finyst.com/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://finyst.com" />
        <meta property="twitter:title" content="Finyst AI | Financial Research Platform" />
        <meta
          property="twitter:description"
          content="Unlock the power of AI-driven financial analysis with Finyst. Stay ahead with insights, data, and real-time analysis."
        />
        <meta property="twitter:image" content="https://finyst.com/twitter-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Additional SEO for Viewport & Mobile Responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <LandingPage />
    </div>
  );
}

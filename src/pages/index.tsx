import { Inter } from "next/font/google";
import LandingPage from "@/components/landing-page";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className}>
      <Head>
        {/* Primary Meta Tags */}
        <title>Finyst | Revolutionizing Financial Research with AI</title>
        <meta name="title" content="Finyst | Revolutionizing Financial Research with AI" />
        <meta
          name="description"
          content="Discover Finyst: your AI-powered financial research companion. Simplify complex data, access real-time insights, and make smarter investment decisions."
        />
        <meta name="keywords" content="Finyst, financial research, AI, stock analysis, AI-powered insights, investment, market data, fintech" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Finyst" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://finyst.com" />
        <meta property="og:title" content="Finyst | Revolutionizing Financial Research with AI" />
        <meta
          property="og:description"
          content="Transform your financial research with Finyst, an AI-powered platform designed for smarter, faster, and more intuitive stock analysis."
        />
        <meta property="og:image" content="https://finyst.com/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://finyst.com" />
        <meta property="twitter:title" content="Finyst | Revolutionizing Financial Research with AI" />
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

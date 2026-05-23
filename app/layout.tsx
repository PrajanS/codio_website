import type { Metadata, Viewport } from 'next';
import { Fraunces, Geist, JetBrains_Mono } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import Ticker from './components/Ticker';
import Cursor from './components/Cursor';
import ScrollProgress from './components/ScrollProgress';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  axes: ['opsz', 'SOFT'],
  style: ['normal', 'italic'],
});

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://imax.dev'),
  title: {
    default: 'iMax — Engineering studio for software, mobile & cloud',
    template: '%s — iMax',
  },
  description:
    'iMax is a small senior engineering studio. We design, build and ship durable software for ambitious teams — web, mobile, cloud.',
  keywords: ['software studio', 'web development', 'mobile apps', 'cloud engineering', 'product design'],
  authors: [{ name: 'iMax' }],
  openGraph: {
    title: 'iMax — Engineering studio',
    description: 'Senior software engineering, end-to-end. Web, mobile, cloud.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#f6f3ec',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${geist.variable} ${jetbrains.variable}`}>
      <body>
        <Cursor />
        <ScrollProgress />
        <Ticker />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

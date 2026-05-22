import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'iMax — Software & IT Services that Move Businesses Forward',
    template: '%s · iMax',
  },
  description:
    'iMax builds high-performance web apps, mobile experiences, and cloud infrastructure for ambitious teams. Premium software engineering, end-to-end.',
  keywords: ['software development', 'web development', 'mobile apps', 'cloud solutions', 'IT services'],
  authors: [{ name: 'iMax' }],
  openGraph: {
    title: 'iMax — Software & IT Services',
    description: 'Premium software engineering for ambitious teams. Web, mobile, cloud.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#060814',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

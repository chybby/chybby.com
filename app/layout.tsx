import type { Metadata } from 'next';
import { outfit, roboto_slab, jetbrains_mono } from './ui/fonts';
import './globals.css';
import Header from './ui/header';
import { Providers } from './providers';
import Footer from './ui/footer';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: {
    template: "%s | Dome's Portfolio",
    default: "Dome's Portfolio",
  },
  description:
    'Adam Chyb (Dome) is a software engineer with interests in backend, OS and security.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${roboto_slab.variable} ${jetbrains_mono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen w-full flex-col bg-gradient-to-t from-slate-200 to-zinc-100 bg-cover antialiased dark:from-zinc-900 dark:to-slate-800">
        <Providers>
          <Header />
          <main className="mx-auto w-full grow p-6 lg:max-w-screen-lg">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-8C1PKSPN32" />
    </html>
  );
}

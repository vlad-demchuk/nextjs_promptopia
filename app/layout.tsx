import type { Metadata } from 'next';
import '@styles/globals.css';
import { inter } from '@styles/fonts';
import Header from '@components/header/header';
import Provider from '@contexts/provider';

export const metadata: Metadata = {
  title: 'Promptopia Clone',
  description: 'Discover & Share AI Prompts',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} gradient`}>
        <Provider>
          <Header />

          <main className="app">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}

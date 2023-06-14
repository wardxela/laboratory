import type { PropsWithChildren } from 'react';

import './globals.css';
import './highlight.css';

import { Container } from '@/shared/ui';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';
import { ScrollBackAndForth } from '@/widgets/ScrollBackAndForth';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ru" className="h-full">
      <body className="h-full dark:bg-slate-950">
        <div className="flex h-full flex-col">
          <Header />
          <div className="flex-grow mt-14 grid grid-cols-[1fr_minmax(auto,_48em)_1fr]">
            <div>
              <ScrollBackAndForth />
            </div>
            <Container>
              <div className="mt-6">{children}</div>
            </Container>
          </div>
          <div className="mt-auto">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

import type { PropsWithChildren } from 'react';

import './globals.css';
import './highlight.css';

import { Container } from '@/shared/ui';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ru" className="h-full">
      <body className="h-full dark:bg-slate-950">
        <div className="flex h-full flex-col gap-4">
          <Header />
          <div className="mt-20">
            <Container>{children}</Container>
          </div>
          <div className="mt-auto">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

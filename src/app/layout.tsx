import './globals.css';
import './highlight.css';
import { Header } from '@/widgets/Header';

export const metadata = {
  title: "Ward's Lab",
  description: 'Блог о разработке и программировании',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <div className="mb-4">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}

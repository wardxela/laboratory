import './globals.css';
import { Header } from '@/widgets/Header';

export const metadata = {
  title: "Ward's lib",
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
        <div className="mb-2">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}

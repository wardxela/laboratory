import { Container, ThemeToggler } from '@/shared/ui';
import Link from 'next/link';

export function Header() {
  return (
    <header className="fixed left-0 top-0 w-full border-b border-slate-100 bg-white dark:border-slate-900 dark:bg-slate-950">
      <Container>
        <div className="flex h-14 items-center">
          <Link
            className="font-semibold text-slate-800 transition-colors hover:text-blue-400 dark:text-slate-200 dark:hover:text-blue-400"
            href="/"
          >
            Ward&apos;s Lab
          </Link>
          <nav className="ml-auto">
            <ul className="flex gap-6">
              <li>
                <Link
                  className="font-semibold text-slate-800 transition-colors hover:text-blue-400 dark:text-slate-200 dark:hover:text-blue-400"
                  href="/blog"
                >
                  Блог
                </Link>
              </li>
              <li>
                <a
                  className="font-semibold text-slate-800 transition-colors hover:text-blue-400 dark:text-slate-200 dark:hover:text-blue-400"
                  href="https://vk.com/wardxela"
                  target="_blank"
                >
                  VK
                </a>
              </li>
              <li>
                <a
                  className="font-semibold text-slate-800 transition-colors hover:text-blue-400 dark:text-slate-200 dark:hover:text-blue-400"
                  href="https://github.com/wardxela"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
          <div className="ml-6">
            <ThemeToggler />
          </div>
        </div>
      </Container>
    </header>
  );
}

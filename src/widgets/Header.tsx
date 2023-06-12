import { Container } from '@/shared/ui';
import Link from 'next/link';

export function Header() {
  return (
    <header>
      <Container>
        <div className="flex h-14 items-center">
          <Link className="transition-colors hover:text-orange-500" href="/">
            Ward&apos;s Lab
          </Link>
          <nav className="ml-auto">
            <ul className="flex gap-6">
              <li>
                <a
                  className="transition-colors hover:text-orange-500"
                  href="https://vk.com/wardxela"
                  target="_blank"
                >
                  VK
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-orange-500"
                  href="https://github.com/wardxela"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}

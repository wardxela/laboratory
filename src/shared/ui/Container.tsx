import { PropsWithChildren } from 'react';

export function Container({ children }: PropsWithChildren) {
  return <div className="mx-auto max-w-3xl px-4">{children}</div>;
}

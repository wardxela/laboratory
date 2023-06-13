import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

export function H1({ children }: PropsWithChildren) {
  return (
    <h1 className="mb-4 mt-2 text-4xl font-bold dark:text-slate-200">
      {children}
    </h1>
  );
}

export function H2({ children }: PropsWithChildren) {
  return (
    <h2 className="mb-4 mt-2 text-3xl font-bold dark:text-slate-200">
      {children}
    </h2>
  );
}

export function H3({ children }: PropsWithChildren) {
  return (
    <h3 className="mb-4 mt-2 text-2xl font-bold dark:text-slate-200">
      {children}
    </h3>
  );
}

export function H4({ children }: PropsWithChildren) {
  return (
    <h4 className="mb-4 mt-2 text-xl font-bold dark:text-slate-200">
      {children}
    </h4>
  );
}

export function H5({ children }: PropsWithChildren) {
  return (
    <h5 className="mb-4 mt-2 text-lg font-bold dark:text-slate-50">
      {children}
    </h5>
  );
}

export function H6({ children }: PropsWithChildren) {
  return (
    <h6 className="mb-4 mt-2 text-base font-semibold dark:text-slate-50">
      {children}
    </h6>
  );
}

export function P({ children }: PropsWithChildren) {
  return (
    <p className="mb-4 text-lg last:mb-0 dark:text-slate-400">{children}</p>
  );
}

export function HR() {
  return <hr className="mb-4 border-slate-200 dark:border-slate-800" />;
}

// TODO: detect whether link is external and act appropriately
export function A({ children, href, ...props }: ComponentPropsWithoutRef<'a'>) {
  return (
    <a
      {...props}
      href={href}
      target="_blank"
      className="text-blue-400 hover:text-blue-500"
    >
      {children}
    </a>
  );
}

export function CodeSample({ children }: PropsWithChildren) {
  return <div className="grid grid-cols-2 gap-4">{children}</div>;
}

CodeSample.Code = function Code({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col">
      <H5>Код</H5>
      <div className="flex-grow">{children}</div>
    </div>
  );
};

CodeSample.Result = function Result({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col">
      <H5>Результат</H5>
      <div className="flex-grow">{children}</div>
    </div>
  );
};

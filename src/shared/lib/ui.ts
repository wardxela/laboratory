export function clsx(classNamesMap: Record<string, boolean>) {
  return Object.entries(classNamesMap)
    .filter(data => data[1])
    .map(([className]) => className)
    .join(' ');
}

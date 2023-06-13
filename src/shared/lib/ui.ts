export function clsx(classNamesMap: Record<string, boolean>) {
  return Object.entries(classNamesMap)
    .filter(([_, shouldApply]) => shouldApply)
    .map(([className]) => className)
    .join(' ');
}

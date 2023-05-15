export const fixPathWhenPackaged = (path: string) => {
  return path.replace('app.asar', 'app.asar.unpacked')
}

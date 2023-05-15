export const OS = {
  Windows: 'win32',
  Mac: 'darwin'
}

export const byOS = (handlers: any) => {
  const handler = handlers[process.platform]

  if (typeof handler === 'function') return handler()

  return handler
}

export const getOS = () => {
  return process.platform
}

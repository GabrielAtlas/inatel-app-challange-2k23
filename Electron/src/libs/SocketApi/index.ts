import { io } from 'socket.io-client'

export const CONNECTION_STRING = 'ws://127.0.0.1:8000'

export function connect(connectCallback: any, onUpdate: any) {
  try {
    const socket = io(CONNECTION_STRING)

    socket.on('connect', connectCallback)

    socket.on('data', onUpdate)
  } catch (err) {
    return undefined
  }
}

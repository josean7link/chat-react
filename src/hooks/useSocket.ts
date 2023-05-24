import { useCallback, useEffect, useState } from 'react'
import io, { Socket } from 'socket.io-client'

const useSocket = <T extends {}, K extends {}>(serverPath: string) => {
  const [socket, setSocket] = useState<Socket<T, K> | null>(null)
  const [online, setOnline] = useState(false)

  const connectSocket = useCallback(() => {
    const token = 'token'

    const socketTemp = io(serverPath, {
      autoConnect: true,
      forceNew: true,
      extraHeaders: {
        Authorization: `Bearer ${token}`,
      },
    })

    setSocket(socketTemp)
  }, [serverPath])

  const disconnectSocket = useCallback(() => {
    socket?.disconnect()
  }, [socket])

  useEffect(() => {
    setOnline(socket?.connected ?? false)
  }, [socket])

  useEffect(() => {
    socket?.on('connect', () => setOnline(true))
  }, [socket])

  useEffect(() => {
    socket?.on('disconnect', () => setOnline(false))
  }, [socket])

  return {
    socket,
    online,
    connectSocket,
    disconnectSocket,
  }
}

export default useSocket


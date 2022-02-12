import { useState } from 'react'

export function useTimer(seconds: number, onFinish: () => void) {
  const [ left, setLeft ] = useState(seconds)
  const [ handler, setHandler ] = useState<NodeJS.Timeout>()

  function start() {
    function tick() {
      setLeft(current => {
        const value = current - 1
        if(value <= 0) {
          stop()
          onFinish()
        }
        return value
      })
    }
    stop()
    const intervalHandler = setInterval(tick, 1000)
    setHandler(intervalHandler)
  }

  function stop() {
    console.debug({ handler })
    if(handler) {
      clearInterval(handler)
    }
  }

  function restart() {
    stop()
    setLeft(seconds)
    start()
  }

  return { start, stop, restart, left }
}

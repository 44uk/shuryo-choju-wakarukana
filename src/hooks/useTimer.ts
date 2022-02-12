import { useState } from 'react'

export function useTimer(seconds: number, onFinish: () => void) {
  const [ left, setLeft ] = useState(seconds)
  const [ handlerID, setHandlerID ] = useState<NodeJS.Timeout>()

  function stop() {
    if(handlerID) { clearInterval(handlerID) }
  }

  function tick() {
    setLeft(current => {
      const newValue = current - 1
      if(newValue <= 0) {
        stop()
        onFinish()
      }
      return newValue
    })
  }

  function start() {
    const intervalID = setInterval(tick, 1000)
    setHandlerID(intervalID)
  }

  function restart() {
    stop()
    setLeft(seconds)
    start()
  }

  return { start, stop, restart, left }
}

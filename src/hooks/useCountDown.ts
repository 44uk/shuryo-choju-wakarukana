import { useState } from 'react'

export function useCountDown(seconds: number, onFinish: () => void) {
    const [ left, setLeft ] = useState(seconds)
    const [ handler, setHandler ] = useState<NodeJS.Timeout>()

    function tick() {
        setLeft(current => {
            const value = current - 1
            if(value <= 0) {
                stop()
                onFinish()
                return current
            }
            return value
        })
    }

    function start() {
        stop()
        setHandler(setInterval(() => tick(), 1000))
    }

    function stop() {
        if(handler) { clearInterval(handler) }
    }

    function restart() {
        stop()
        setLeft(seconds)
        start()
    }

    return { start, stop, restart, left }
}
import { useEffect, useState } from 'react'

import { Picture } from '../../components'
import { useTimer } from '../../hooks'

interface Props {
  src: string
  name: string
  huntable: boolean
  timeout: number
  reveal: boolean
  onChangeReveal: (v: boolean) => void
  onTick: (s: number) => void
}

export function PictureContainer({ src, name, huntable, ...props }: Props) {
  const [ reveal, setReveal ] = useState(props.reveal)
  const { left, start, restart, stop } = useTimer(props.timeout, () => {
    setReveal(true)
  })

  useEffect(() => {
    props.onChangeReveal(reveal)
  }, [reveal])

  useEffect(() => {
    props.onTick(left)
    left <= 0 && stop()
  }, [left])

  useEffect(() => {
    setReveal(false)
    restart()
    return () => stop()
  }, [src])

  return (
  <div onClick={() => left <= 0 && setReveal(true)}>
    <Picture
      src={src}
      name={name}
      huntable={huntable}
      reveal={reveal}
    />
  </div>
    )
}

export default PictureContainer

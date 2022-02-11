import { useEffect, useState } from 'react'
import { Picture } from '../../components'
import { useCountDown } from '../../hooks'

interface Props {
    src: string
    name: string
    huntable: boolean
    timeout: number
    reveal: boolean
    onChangeReveal: (v: boolean) => void
}

export function PictureContainer({ src, name, huntable, ...props }: Props) {
    const [ reveal, setReveal ] = useState(props.reveal)
    const { restart, stop, left } = useCountDown(props.timeout, () => {
        setReveal(true)
    })

    useEffect(() => {
        props.onChangeReveal(reveal)
    }, [reveal])

    useEffect(() => {
        setReveal(false)
        restart()
        return () => stop()
    }, [src])

    return (
    <div onClick={() => left <= 0 && setReveal(true)}>
        <span>{ left }</span>
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
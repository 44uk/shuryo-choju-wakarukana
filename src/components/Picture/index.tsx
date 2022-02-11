interface Props {
    src: string
    name: string
    huntable: boolean
    reveal: boolean
}

export function Picture({ src, name, huntable, reveal = false }: Props) {
    return (<figure>
        <img src={src} alt="" />
        { reveal && <>
            <figcaption>{name}</figcaption>
            <span>{ huntable ? 'Yes' : 'No' }</span>
        </>
        }
    </figure>)
}

export default Picture
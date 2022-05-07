interface TitleProps {
    title: string
}

export const Title = (props: TitleProps) => {
    return (
        <h1 className="text-5xl text-blue text-center m-15">{props.title}</h1>
    )
}

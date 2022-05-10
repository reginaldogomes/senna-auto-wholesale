interface TitleProps {
    title: string
}

export const Title = (props: TitleProps) => {
    return (
        <h1 className="text-5xl text-blue text-center pb-10">{props.title}</h1>
    )
}

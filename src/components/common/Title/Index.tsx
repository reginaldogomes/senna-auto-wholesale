interface TitleProps {
    title: string
}

export const Title = (props: TitleProps) => {
    return <h1 className="text-2xl w-full text-center">{props.title}</h1>
}

interface HeadingPageProps {
    title: string
}
export const HeadingPage = (props: HeadingPageProps) => {
    return (
        <div className="w-full bg-gray-100">
            <div className="container mx-auto h-50 text-black py-12">
                <h1 className="text-4xl">{props.title}</h1>
            </div>
        </div>
    )
}

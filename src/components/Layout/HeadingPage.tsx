interface HeadingPageProps {
    title: string
}

export const HeadingPage = (props: HeadingPageProps) => {
    return (
        <div className="w-full bg-gray-100">
            <div className="container flex mx-auto h-50 text-black py-12 ">
                <div className="basis-1/2">
                    <h1 className="text-4xl">{props.title}</h1>
                </div>
                <div className="basis-1/5">
                    <nav className="rounded-md">
                        <ol className="list-reset flex text-xs">
                            <li>
                                <a
                                    href="/"
                                    className="text-blue-600 hover:text-blue-700"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <span className="text-gray-500 mx-2">/</span>
                            </li>
                            <li className="text-gray-500">{props.title}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    )
}

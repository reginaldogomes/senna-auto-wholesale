export const TopBar = () => {
    return (
        <div className="bg-gray-100 hidden md:block py-2">
            <div className="container flex mx-auto">
                <div className="basis-1/2">
                    <ul className="flex">
                        <li>604 500 7794</li>
                        <li>
                            <a>sales@sennaautowholesale.com</a>
                        </li>
                    </ul>
                </div>
                <div className="basis-1/2">
                    <ul className="flex float-right">
                        <li>facebook</li>
                        <li>instagram</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

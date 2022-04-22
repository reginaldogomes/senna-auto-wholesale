import { FaFacebookSquare } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'

export const TopBar = () => {
    return (
        <div className="bg-gray-100 bg-opacity-25 hidden md:block py-2">
            <div className="container flex mx-auto">
                <div className="basis-1/2">
                    <ul className="flex align-middle">
                        <li className="p-1 w-40 text-xl">
                            <a
                                className="flex text-xs text-gray-500"
                                href="tel:6031112298"
                            >
                                <FaWhatsapp className="text-lg" />
                                <span className="align-baseline pl-1">
                                    604 500 7794
                                </span>
                            </a>
                        </li>
                        <li className="p-1 w-40 text-xl">
                            <a
                                href="mailto:sales@sennaautowholesale.com"
                                className="flex text-xs text-gray-500"
                            >
                                <MdOutlineMail className="text-lg" />
                                <span className="align-baseline pr-1">
                                    sales@sennaautowholesale.com
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="basis-1/2">
                    <ul className="flex float-right">
                        <li>
                            <FaFacebookSquare className="text-yellow text-2xl" />
                        </li>
                        <li>
                            <FaInstagramSquare className="text-yellow text-2xl" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

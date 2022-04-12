import { useState } from 'react'
import Link from 'next/link'
import Logo from 'components/Logo/logo'
import { FaBars } from 'react-icons/fa'

export const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    return (
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3 border-b-primary">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <a
                        className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                        href="#pablo"
                    >
                        <Logo />
                    </a>
                    <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <i className="text-primary">
                            <FaBars />
                        </i>
                    </button>
                </div>
                <div
                    className={
                        'lg:flex flex-grow items-center' +
                        (navbarOpen ? ' flex' : ' hidden')
                    }
                    id="example-navbar-danger"
                >
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        {[
                            ['Home', '/'],
                            ['Sell', '/sell'],
                            ['About Us', '/about-us'],
                            ['Contact Us', '/contact-us']
                        ].map(([title, url]) => (
                            <li className="nav-item" key={title}>
                                <Link href={url}>
                                    <a className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
                                        {title}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

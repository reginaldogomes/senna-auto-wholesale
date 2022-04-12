import Image from 'next/image'
import Link from 'next/link'
import LogoUrl from '/public/images/logo.png'

const Logo = () => {
    return (
        <Link href={'/'}>
            <Image src={LogoUrl} width="197" height="59" />
        </Link>
    )
}

export default Logo

import Image from 'next/image'
import LogoUrl from '/public/images/logo.png'

const Logo = () => {
    return <Image src={LogoUrl} width="197" height="59" />
}

export default Logo

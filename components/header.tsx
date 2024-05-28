import { Inter } from 'next/font/google'
import Link from "next/link"
import Image from "next/image"

const inter = Inter({ subsets: ['latin'] })

export default function Header() {
    return(
        <nav className="w-full fixed z-50 container bg-primary text-white text-lg overflow-hidden rounded-b-2xl md:rounded-xl md:mt-4">
            <ul className="flex justify-between items-center py-8 px-5 md:px-20">
                <li className='hover:scale-110 transition'>
                    <Link href="/">
                        <Image src={"/logo.png"} alt={"Logo"} width={200} height={50} />
                    </Link>
                </li>
                <li className='hover:underline'>
                    <Link href="/contato">
                        Contato
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
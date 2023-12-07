import { Inter } from 'next/font/google'
import Link from "next/link"
import Image from "next/image"

const inter = Inter({ subsets: ['latin'] })

export default function Header() {
    return(
        <nav className="w-full fixed z-50 container bg-primary text-white text-xl overflow-hidden md:rounded md:mt-4">
            <ul className="flex justify-around items-center p-8">
                <li className='hover:scale-110 transition'>
                    <Link href="/">
                        <Image src={"/next.svg"} alt={"Logo"} width={100} height={50} />
                    </Link>
                </li>
                <li className='hover:underline'>
                    <Link href="/sobre">
                        Sobre
                    </Link>
                </li>
                <li className='hover:underline'>
                    <Link href="/artes">
                        Artes
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
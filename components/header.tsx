import { Inter } from 'next/font/google'
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const inter = Inter({ subsets: ['latin'] })

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false)

    return(
        <nav className={`w-full fixed z-50 container bg-primary text-white text-lg rounded-b-2xl md:rounded-xl md:mt-4 ${inter.className}`}>
            <ul className="flex justify-between items-center pt-8 pb-7 px-5 md:px-20">
                <li className='md:hover:scale-110 transition'>
                    <Link href="/">
                        <Image src={"/logo.png"} alt={"Logo"} width={200} height={50} />
                    </Link>
                </li>
                <li className='hidden md:block'>
                    <Link className='mr-5 hover:underline' href="/contato">
                        Contato
                    </Link>
                    <Link className='hover:underline' href="/portfolio">
                        Portfólio
                    </Link>
                </li>
                <li className='flex items-center md:hidden'>
                    <button className='p-2' onClick={() => setMenuOpen(!menuOpen)}>
                        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                        </svg>
                    </button>
                    {menuOpen && (
                        <div className='absolute top-20 right-6 w-32 bg-white border border-gray-300 rounded-lg shadow-lg py-2 text-base text-black z-[60]'>
                            <p className='px-4 py-2'>
                                <Link href="/contato">
                                    Contato
                                </Link>
                            </p>
                            <p className='px-4 py-2'>
                                <Link href="/portfolio">
                                    Portfólio
                                </Link>
                            </p>
                        </div>
                    )}
                </li>
            </ul>
        </nav>
    )
}
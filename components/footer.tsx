import Link from "next/link"

export default function Footer() {
    return(
        <div className="container bg-primary text-white w-screen h-20 rounded-t-2xl text-center text-lg">
            <ul className="flex justify-between items-center pt-8 pb-7 px-5 md:px-20">
                <li className='w-1/3'>
                    <Link className='md:hover:underline' href="/">
                        Início
                    </Link>
                </li>
                <li className='w-1/3'>
                    <Link className='md:hover:underline' href="/contato">
                        Contato
                    </Link>
                </li>
                <li className='w-1/3'>
                    <Link className='md:hover:underline' href="/portfolio">
                        Portfólio
                    </Link>
                </li>
            </ul>
        </div>

    )
}
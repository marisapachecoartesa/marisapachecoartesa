import { Inter } from 'next/font/google'
import Footer from "@/components/footer"
import Header from "@/components/header"
import Link from "next/link"

const inter = Inter({ subsets: ['latin'] })

export default function Sobre() {
    return(
        <div className={`flex flex-col min-h-screen items-center bg-light text-black justify-between ${inter.className}`}>
            <Header />
            <Link href="/" className="bg-white text-black">
                Home
            </Link>
            <Footer />
        </div>
    )
}

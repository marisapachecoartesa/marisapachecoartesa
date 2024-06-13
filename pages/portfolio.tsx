import { Inter } from 'next/font/google'
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";

const inter = Inter({ subsets: ['latin'] })

export default function Portfolio() {
    const data = require('../images.json')

    return (
        <div className={`flex flex-col min-h-screen items-center bg-light text-black text-xl justify-between overflow-hidden ${inter.className}`}>
            <Header />
            <div className='mt-40 mb-10 w-full container conteiner'>
                <h1 className='text-center text-3xl pb-6'>Portfólio</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data?.images?.map((image: any) => (
                        <Image key={image.name} className='w-full md:w-auto md:m-auto aspect-[3/4] object-cover object-center overflow-hidden' src={image.url} alt={image.name} width={300} height={300} quality={80} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
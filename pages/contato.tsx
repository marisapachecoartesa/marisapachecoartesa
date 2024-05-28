import { Inter } from 'next/font/google'
import Footer from "@/components/footer"
import Header from "@/components/header"
import Image from "next/image"
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Contato() {
    const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleNomeChange = (event: any) => {
        setNome(event.target.value);
    };
    
    const handleMensagemChange = (event: any) => {
        setMensagem(event.target.value);
    };

    console.log(nome)

    return (
        <div className={`flex flex-col min-h-screen items-center bg-light text-black text-xl justify-between overflow-hidden ${inter.className}`}>
          <Header />
          <div className='mt-40 w-full md:w-1/3 container conteiner'>
            <h1 className='text-center'>Faça sua encomenda!</h1>
            <input className='w-full mt-5 p-2 rounded' placeholder='Seu nome' id='nome' type='text' value={nome} onChange={handleNomeChange} />
            <input className='w-full mt-3 p-2 rounded' placeholder='Sua mensagem' id='mensagem' type='textarea' value={mensagem} onChange={handleMensagemChange} />
            <a className='underline mt-3 text-center flex items-center' target='_blank' href={`https://wa.me/5511973165808?text=Olá, meu nome é ${nome}. ${mensagem}`}>
                Enviar via WhatsApp<Image src={'/whatsapp.webp'} alt={'Whatsapp'} width={70} height={40} />  
            </a>
          </div>
          <Footer />
        </div>
      );
}

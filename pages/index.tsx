import { Inter } from 'next/font/google'
import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const inter = Inter({ subsets: ['latin'] })

const swiperOptions = {
  lazy: "true", 
  loop: true,
  updateOnWindowResize: true,
  pagination: {
    clickable: true,
  },
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  allowTouchMove: true,
  slidesPerView: 1.2,
  centeredSlides: true,
  spaceBetween: 16,
};

export default function Home() {
  return (
    <main
      className={`flex flex-col min-h-screen items-center bg-light text-black text-xl justify-between overflow-hidden ${inter.className}`}
    >
      <Header />

      <div className='md:flex items-center gap-4 mt-40 container px-6'>
        <Image className='' src={'/profile.jpg'} alt={'Foto Artesã Marisa'} width={400} height={600} priority quality={100}/>
        <div className='flex flex-col gap-4 text-center md:text-left mt-6 md:mt-0'>
          <p className='text-4xl' data-aos='fade-right' data-aos-duration="500">
            Olá!
          </p>
          <h1 data-aos='fade-right' data-aos-duration="600">Meu nome é <span className='font-serif text-2xl'>Marisa Pacheco</span></h1>
          <p data-aos='fade-right' data-aos-duration="700">Sou artesã especializada em pinturas com técnicas de Pontilhismo, Pintura botânica e Bauernmalerei</p>
        </div>
      </div>

      <div className='my-10 w-full container'>
        <h2 className='text-center pb-6'>Conheça algumas das minhas artes:</h2>

        <Swiper {...swiperOptions} className="cursor-default">
              <SwiperSlide>
                <Image 
                  className='w-full md:w-auto aspect-[3/4] object-cover object-center overflow-hidden' 
                  src={"/img.jpeg"} 
                  alt={"Arte 1"} 
                  width={300} 
                  height={300} 
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  className='w-full md:w-auto aspect-[3/4] object-cover object-center overflow-hidden'
                  src={"/img (1).jpeg"}
                  alt={"Arte 2"}
                  width={300}
                  height={300}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  className='w-full md:w-auto aspect-[3/4] object-cover object-center overflow-hidden'
                  src={"/img (2).jpeg"}
                  alt={"Arte 3"}
                  width={300}
                  height={300}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  className='w-full md:w-auto aspect-[3/4] object-cover object-center overflow-hidden'
                  src={"/img (3).jpeg"}
                  alt={"Arte 4"}
                  width={300}
                  height={300}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  className='w-full md:w-auto aspect-[3/4] object-cover object-center overflow-hidden'
                  src={"/img (4).jpeg"}
                  alt={"Arte 5"}
                  width={300}
                  height={300}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  className='w-full md:w-auto aspect-[3/4] object-cover object-center overflow-hidden'
                  src={"/img (5).jpeg"}
                  alt={"Arte 6"}
                  width={300}
                  height={300}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  className='w-full md:w-auto aspect-[3/4] object-cover object-center overflow-hidden'
                  src={"/img (6).jpeg"}
                  alt={"Arte 7"}
                  width={300}
                  height={300}
                />
              </SwiperSlide>
              <button className="swiper-button-prev !w-[10%] !hidden md:!flex" />
              <button className="swiper-button-next !w-[10%] !hidden md:!flex" />
            </Swiper>
      </div>

      <Footer />
    </main>
  )
}

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
  lazy: true,
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
        <Image className='' src={'/400x600.svg'} alt={'Foto Artesã Marisa'} width={400} height={600}/>
        <div className='flex flex-col gap-4 text-center md:text-left'>
          <p className='text-4xl' data-aos='fade-right' data-aos-duration="500">
            Olá!
          </p>
          <h1 data-aos='fade-right' data-aos-duration="600">Meu nome é <span className='font-serif text-2xl'>Marisa Pacheco</span></h1>
          <p data-aos='fade-right' data-aos-duration="700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non gravida sapien, vitae placerat est. Donec efficitur faucibus ipsum nec convallis. Vivamus feugiat sapien vehicula arcu fermentum, et tempor leo consectetur. Sed vulputate quis ligula id sollicitudin. Pellentesque ultrices justo eu eleifend vulputate. Duis mollis faucibus sapien, sed pretium dui auctor eu. Proin lobortis eros vel elementum pulvinar. Quisque sit amet tincidunt quam. Sed pretium urna eget orci sollicitudin, eget posuere purus accumsan.</p>
        </div>
      </div>

      <div className='mt-16 w-full'>
        <h2 className='md:pl-16 text-center pb-6'>Conheça algumas das minhas artes:</h2>

        <Swiper {...swiperOptions} className="cursor-default">
              <SwiperSlide>
                <div className="py-6 px-4 rounded-lg bg-[#d9d9d9] mb-10 flex items-center h-[500px] md:pb-[3.2vw]">
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="py-6 px-4 rounded-lg bg-[#d9d9d9] mb-10 flex items-center h-[500px] md:pb-[3.2vw]">
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="py-6 px-4 rounded-lg bg-[#d9d9d9] mb-10 flex items-center h-[500px] md:pb-[3.2vw]">
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="py-6 px-4 rounded-lg bg-[#d9d9d9] mb-10 flex items-center h-[500px] md:pb-[3.2vw]">
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="py-6 px-4 rounded-lg bg-[#d9d9d9] mb-10 flex items-center h-[500px] md:pb-[3.2vw]">
                </div>
              </SwiperSlide>
              <button className="swiper-button-prev !w-[10%] !hidden md:!flex" />
              <button className="swiper-button-next !w-[10%] !hidden md:!flex" />
            </Swiper>
      </div>

      <Footer />
    </main>
  )
}

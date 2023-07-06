import { ReactNode, useEffect } from 'react'
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper/modules'

import Flicking, { MoveEvent, WillChangeEvent } from '@egjs/react-flicking'

import 'swiper/css/bundle'
import '@/styles/swiper.css'

interface Props extends SwiperProps {
  children?: ReactNode
}

export default function CartazContainer({ children, ...rest }: Props) {
  return (
    <>
      {/* <Flicking */}
        {/* // viewportTag="div"
        // cameraTag="div"
        // cameraClass="w-full"
        // renderOnSameKey={false}
        // align="center"
        // onMove={(e: MoveEvent) => {}}
        // onWillChange={(e: WillChangeEvent) => {}}
        // horizontal={true}
        circular={true}
        // moveType="freeScroll"
        // bound={true}
      > */}
        {/* <div className='flex gap-3'> */}
        {/* <div className="flex w-40 flex-col gap-3 border">1</div>
          <div className="flex w-40 flex-col gap-3 border">2</div>
          <div className="flex w-40 flex-col gap-3 border">3</div>
          <div className="flex w-40 flex-col gap-3 border">4</div>
          <div className="flex w-40 flex-col gap-3 border">5</div>
          <div className="flex w-40 flex-col gap-3 border">6</div> */}
        {/* </div> */}
      {/* </Flicking> */}


      {/* <Swiper
        slidesPerView={2}
        loop={true}
        spaceBetween={30}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="flex gap-4 "
        wrapperClass="flex gap-4 "
        slideActiveClass=''
      > */}
      <div className="flex gap-3">
        {Array.isArray(children) && children.map((child) => child)}
      </div>
      {/* <SwiperSlide>slider 1</SwiperSlide>
        <SwiperSlide>slider 2</SwiperSlide>
        <SwiperSlide>slider 3</SwiperSlide>
        <SwiperSlide>slider 4</SwiperSlide>
        <SwiperSlide>slider 5</SwiperSlide>
      </Swiper> */}
    </>
  )
}

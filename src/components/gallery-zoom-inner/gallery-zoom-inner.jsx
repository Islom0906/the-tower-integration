import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, EffectFade, FreeMode, Navigation, Thumbs} from 'swiper/modules';
import {ImgUI} from "@/components";
import {GrNext, GrPrevious} from "react-icons/gr";
const GalleryZoomInner = ({images}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            {
                images.length > 0 &&
                <>

                    <Swiper
                        loop={true}
                        spaceBetween={10}
                        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                        modules={[FreeMode, Thumbs ,EffectFade, Autoplay]}
                        className="mySwiper2 mb-5"
                        effect={"fade"}
                    >
                        {
                            images?.map(image => (
                                <SwiperSlide key={image?.id} className={'block w-full aspect-video lg:aspect-[10/4]'}>
                                        <ImgUI quality={100} imageStyle={'object-center'} src={image?.image} alt={'gallery'}/>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 4,
                                spaceBetween: 5,
                            },
                            768: {
                                slidesPerView: 5,
                                spaceBetween: 25
                            },
                            1024: {
                                slidesPerView: 6.5,
                                spaceBetween: 30,
                            }
                        }}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Thumbs ,Navigation]}
                        className="mySwiper"
                        navigation={{
                            nextEl: ".swipper-button-next",
                            prevEl: ".swipper-button-prev",
                        }}
                    >
                        <div className={'grid grid-cols-4'}>
                            {
                                images?.map(image => (
                                    <SwiperSlide key={image?.id}>
                                        <div className={'w-full aspect-[16/11]'}>
                                            <ImgUI src={image?.image} alt={'gallery-zoom'}/>
                                        </div>
                                    </SwiperSlide>

                                ))
                            }
                            {(
                                <div className="relative flex items-center justify-center py-4 mt-5 md:mt-10 gap-x-5">
                                    <div className="cursor-pointer text-brown p-2  swipper-button-prev ">
                                        <GrPrevious className="text-2xl" />
                                    </div>

                                    <div className="cursor-pointer text-brown p-2  swipper-button-next ">
                                        <GrNext className="text-2xl" />
                                    </div>
                                </div>
                            )}
                        </div>

                    </Swiper>
                </>

            }
        </>
    );
};

export default GalleryZoomInner;
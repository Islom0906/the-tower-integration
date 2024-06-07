import {Autoplay, EffectFade, FreeMode, Navigation, Pagination, Thumbs} from 'swiper/modules';
import {ImgUI} from "@/components";
import {Swiper, SwiperSlide} from "swiper/react";
import {useState} from "react";

const RoomInnerSlider = ({images}) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            {
                images?.length > 0 &&
                <div className={'grid grid-cols-8 xl:grid-cols-12 gap-2 lg:gap-5'}>
                    <div className={'col-span-6 xl:col-span-10 room-slider'}>
                        <Swiper
                            loop={true}
                            spaceBetween={10}
                            thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                            modules={[FreeMode, Thumbs ,EffectFade, Autoplay, Pagination]}
                            className="mySwiper2  w-full aspect-square sm:h-[350px] md:h-[450px] lg:h-[500px]  "
                            effect={"fade"}
                            pagination={{
                                clickable: true,
                              }}
                        >
                            {
                                images?.map(image => (
                                    <SwiperSlide key={image?.id}>
                                        <div data-aos='fade-in' className={'block w-full h-full'}>
                                            <ImgUI src={image?.image} card={false} alt={'room-inner'} imageStyle={'object-center'}/>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>

                    </div>

                    <div className={'col-span-2 h-full xl:col-span-2  gap-4 room-inner-slider'}>

                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={30}
                            slidesPerView={3}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Thumbs ,Navigation]}
                            className={"mySwiper flex flex-col w-full h-full gap-5 "}
                        >
                                    {
                                        images?.map(image => (
                                            <SwiperSlide key={image?.id} className='relative  w-full cursor-pointer'>
                                                <ImgUI src={image?.image}  alt={'rooms-inner'} card={true} imageStyle={'object-center'} />
                                            </SwiperSlide>
    
                                        ))

                                        }
                        </Swiper>

                    </div>

                </div>

            }
        </>

    );
};

export default RoomInnerSlider;
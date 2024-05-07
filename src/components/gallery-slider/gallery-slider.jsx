import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ImgUI } from '../index'
import { GrNext, GrPrevious } from 'react-icons/gr'
;

const GallerySlider = ({gallery}) => {
  return (
    <div   className=" relative">
      {gallery && (
            <Swiper
              autoplay={{
                delay: 5500,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".swipper-button-next",
                prevEl: ".swipper-button-prev",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1.5,
                  spaceBetween: 10,
                },
                400: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              pagination={{
                clickable: true,
                el: ".my-pagination",
              }}
              loop={true}
              modules={[Navigation, Pagination]}
              className="w-full mySwiper h-full flex items-center justify-center overflow-auto"
            >
              
                {gallery?.map((image, index) => (
                  <SwiperSlide className={"h-full"} key={image?.id}>
                    <div
                      data-aos='fade-up' data-aos-delay={`${index}00`}
                        // onClick={() => handleGalleryClick(true)}
                      className={"w-full h-[200px] md:h-[300px] block relative overflow-hidden  duration-300"}
                    >
                      <ImgUI
                        src={image?.image}
                        alt={"gallery"}
                        priority={90}
                        imageStyle={'object-center'}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              <div className="relative flex items-center justify-center py-4 mt-5 md:mt-10 gap-x-5">
                <div className="cursor-pointer text-brown p-2  swipper-button-prev ">
                  <GrPrevious className="text-2xl" />
                </div>
                <div className="inline-flex items-center gap-x-4 my-pagination pagintaion-slider"></div>

                <div className="cursor-pointer text-brown p-2  swipper-button-next ">
                  <GrNext className="text-2xl" />
                </div>
              </div>
            </Swiper>
          )}
    </div>

  )
}

export default GallerySlider
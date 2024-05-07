import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation ,Pagination } from "swiper/modules";
import { ImgUI } from "@/components/";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import {langSelect} from "@/helper";
import {useSelector} from "react-redux";

const Slider = ({
                  isHeader= false,
                    priority= false,
  SliderContent,
  PaginationMod, Quality, PaginationInner,
  isLoading , card
}) => {
    const {lang} = useSelector(state => state.langSlice)

  return (
    <SkeletonTheme baseColor="#EBEAE8" highlightColor="#D7D3CE">
    <div
      className={`relative bg-transparent h-full ${
        PaginationMod && "pb-6 md:pb-20"
      } ${PaginationMod ? "section-slider" : "header-slider"} `}
    >
      <Swiper
          className={`${
              PaginationMod ? "section-slider" : "header-slider"
          } w-full h-full`}
          spaceBetween={30}
          effect={"fade"}
          pagination={{
            clickable: true,
            el: ".inner-pagination",
          }}
          navigation={{
            nextEl: ".swipper-button-next-btn",
            prevEl: ".swipper-button-prev-btn",
          }}
          modules={[EffectFade, Autoplay, Navigation, Pagination]}
      >
        {SliderContent?.map((slider) => (

            <SwiperSlide
                key={slider?.id}
                className="relative flex justify-center w-full h-full"
            >
              {
                  slider.title_ru &&
                  <div className="relative z-20 w-full h-full">
                    <div className="container flex flex-col items-center justify-center h-full pb-40 md:mb-10 space-y-5 ">

                      <h2 data-aos='fade-up' data-aos-delay='0.1'
                          className="text-center header-title w-full max-w-[1000px] drop-shadow-[0_5px_5px_rgba(0,0,0,0.2)] ">{

                        isLoading ? <Skeleton duration={1} height={'100%'}
                                              width={'100%'}/> : langSelect(lang, slider?.title_ru, slider?.title_en, slider?.title_uz)
                      }</h2>
                      {
                          slider.sub_title_ru && <p data-aos='fade-up' data-aos-delay='50'
                                                    className="hidden md:block text-white  text-center max-w-[700px] font-roboto  font-light tracing-[0.48px] sm:text-lg w-full  lg:text-xl xl:text-2xl drop-shadow-[0_2px_2px_rgba(0,0,0, 0.4)]">
                            {langSelect(lang, slider?.sub_title_ru, slider?.sub_title_en, slider?.sub_title_uz)}
                          </p>
                      }
                    </div>
                  </div>
              }
              <div
                  className="absolute w-full h-full z-10 top-0 left-0 ">
                {
                  isHeader &&
                <div className={`header-banner w-full h-full absolute z-50`}>
                </div>
                }
                  <div className={`w-full h-full relative`}>
                      <ImgUI src={slider?.image} alt={'banner'} quality={Quality} priority={priority} imageStyle={'object-center'}
                             card={card || false}/>

                  </div>

              </div>
            </SwiperSlide>
        ))}
          {
              PaginationInner &&
        <div className={'absolute w-full bottom-0 left-0 '}>
          <div className="relative flex items-center justify-center py-4 mt-5 md:mt-10 gap-x-5 z-30">
            <div className="inline-flex items-center gap-x-4 inner-pagination room-slider"></div>
          </div>
          </div>
        }
      </Swiper>

      {PaginationMod && (
          <div className="relative flex items-center justify-center py-4 mt-5 md:mt-10 gap-x-5 z-30">
          <div className="cursor-pointer text-[#8F8170] p-2  swipper-button-prev-btn ">
            <GrPrevious className="text-2xl" />
          </div>
          <div className="inline-flex items-center gap-x-4 inner-pagination "></div>

          <div className="cursor-pointer text-[#8F8170] p-2  swipper-button-next-btn ">
            <GrNext className="text-2xl" />
          </div>
        </div>
      )}
    </div>
    </SkeletonTheme>
  );
};

export default Slider;

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { GrNext, GrPrevious } from "react-icons/gr";
import { HotelCard,  NewsCard, ServiceCard } from "@/components";
import {langSelect} from "@/helper";
import {useTranslation} from "react-i18next";



const SwiperSlider = ({ hotelCardData, newsCard, services, xlSlidesPerView }) => {
  const { i18n  } = useTranslation();


  return (
    <div   className=" relative">
      {(hotelCardData || newsCard || services ) &&
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
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: xlSlidesPerView ? xlSlidesPerView : 3,
              spaceBetween: 20,
            },
          }}
          pagination={{
            clickable: true,
            el: ".my-pagination-cards",
          }}
          loop={true}
          modules={[Navigation, Pagination]}
          className="w-full mySwiper h-full flex items-center justify-center overflow-auto"
        >
          {hotelCardData &&
            hotelCardData?.map((card, index) => (
              <SwiperSlide className={"h-full"} key={card?.id}>
                <HotelCard
                  imgs={card?.images}
                  key={card.id}
                  id={card.id}
                  cardTitle={langSelect(i18n.language ,card?.title_ru, card?.title_en , card?.title_uz )}
                  descriptions={card?.information}
                  capacity={card?.capacity}
                  num_balconies={card?.num_balconies}
                  room_size={card?.room_size}
                  num_bathrooms={card?.num_bathrooms}
                  href={`rooms/${card?.slug}`}
                  indexForAos={index}
                />
              </SwiperSlide>
            ))}
          {newsCard &&
            newsCard?.map((card) => (
              <SwiperSlide className={"h-full"} key={card?.id} >
                <NewsCard
                
                  img={card?.main_image}
                  date={card?.created_at}
                  decr={langSelect(i18n.language ,card?.title_ru, card?.title_en , card?.title_uz )}
                  href={`news/${card?.slug}`}
                />
              </SwiperSlide>
            ))}

          {services && 
          services?.map((item , index) => (
            <SwiperSlide className="h-full" key={item.id}>
              <ServiceCard indexForAos={index} key={item?.id} title={langSelect(i18n.language ,item?.title_ru, item?.title_en , item?.title_uz )} href={`/about#${item?.title_uz}`} decsr={langSelect(i18n.language ,item?.description_ru, item?.description_en , item?.description_uz )} src={item?.image?.image}/>
            </SwiperSlide>
          ))
          }

          <div className="relative flex items-center justify-center py-4 mt-5 md:mt-10 gap-x-5">
            <div className="cursor-pointer text-brown p-2  swipper-button-prev ">
              <GrPrevious className="text-2xl" />
            </div>
            <div className="inline-flex items-center gap-x-4 my-pagination-cards pagintaion-slider"></div>

            <div className="cursor-pointer text-brown p-2  swipper-button-next ">
              <GrNext className="text-2xl" />
            </div>
          </div>
        </Swiper>
      }
    </div>
  );
};

export default SwiperSlider;

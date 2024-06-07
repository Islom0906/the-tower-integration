import { useTranslation } from "react-i18next"
import { RxInfoCircled } from "react-icons/rx";
import { IoMdCheckmark } from "react-icons/io";
import {
    ButtonUI, GallerySlider,
    ImgUI,
    RoomInnerSlider,
    SectionTitle,
    SectionUI,
} from "../../components"
import SEO from "@/SEO/SEO";
import {indexSEO} from '@/SEO/SEO.config'
import {useQuery} from "react-query";
import apiService from "@/service/axois";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {langSelect} from "@/helper";
import {MdBalcony, MdOutlineBathroom, MdOutlineBedroomParent, MdOutlinePhotoSizeSelectSmall} from "react-icons/md";
import BeSearchForm from "../../components/be-forms/be-search-form";


const Room = () => {
    const {t} = useTranslation()
    const router = useRouter()
    const { i18n  } = useTranslation();

    const {rooms}=router.query
    const { data: room  , refetch: refetchRoom , isLoading: isLoadingRoom } = useQuery(["room" , rooms], () =>
        apiService.getDataByID(  '/rooms' ,rooms) , { enabled: false}
    );

    const services = [
        {
            img: '/image/service1.svg',
            text: t('roomInner.services.service1'),
            id: 0
        },
        {
            img: '/image/service2.svg',
            text: t('roomInner.services.service2'),
            id: 1
        },
        {
            img: '/image/service3.svg',
            text: t('roomInner.services.service3'),
            id: 2
        },
        {
            img: '/image/service4.svg',
            text: t('roomInner.services.service4'),
            id: 3
        },
        {
            img: '/image/service5.svg',
            text: t('roomInner.services.service5'),
            id: 4
        },
        {
            img: '/image/service6.svg',
            text: t('roomInner.services.service6'),
            id: 5
        },
        {
            img: '/image/service7.svg',
            text: t('roomInner.services.service7'),
            id: 6
        },
        {
            img: '/image/service8.svg',
            text: t('roomInner.services.service8'),
            id: 7
        },
        {
            img: '/image/service9.svg',
            text: t('roomInner.services.service9'),
            id: 8
        },
    ]

    const roomTypes = [
        {
            roomId: 1,
            beRoomType: '5026118'
        },
        {
            roomId: 2,
            beRoomType: '5026117'
        },
        {
            roomId: 3,
            beRoomType: '5026116'
        },
        {
            roomId: 4,
            beRoomType: ''
        },
        {
            roomId: 5,
            beRoomType: '5026112'
        },
        {
            roomId: 6,
            beRoomType: '5026114,5026115'
        },
    ]

    useEffect(() => {
        if(rooms) {
            refetchRoom()
        }
    } ,  [rooms])


    return (
        <div className="wrapper pt-10 relative">

             <SEO
                ogImage={'/logo.png'}
                title={langSelect(i18n.language , room?.title_ru , room?.title_en , room?.title_uz)}
                description={indexSEO[i18n.language ].description}
                ogTitle={langSelect(i18n.language , room?.title_ru , room?.title_en , room?.title_uz)}
                ogDescription={indexSEO[i18n.language ].ogDescription}
                twitterHandle={indexSEO[i18n.language ].twitterHandle}
            />
            <div className={'w-full container'}>
                <BeSearchForm/>
                <div className="pb-5 md:pb-10">
                    <SectionTitle title={langSelect(i18n.language , room?.title_ru , room?.title_en , room?.title_uz)} justify={'justify-center'}/>
                </div>
                <RoomInnerSlider isLoadingRoom={!isLoadingRoom} images={room?.images} />
                <p data-aos='fade-left' className=" font-roboto lg:text-xl font-light pt-5 md:pt-10">
                    {
                        langSelect(i18n.language , room?.description_ru , room?.description_en , room?.description_uz)
                    }
                </p>
            </div>
           <SectionUI padding={'py-[50px]'}>
                <h3 data-aos='fade-up' className=" font-elegance tracking-[2%] text-xl md:text-2xl lg:text-[30px] pb-5">{t('roomInner.servicesTitle')} </h3>
                <div className="flex flex-wrap gap-2 md:gap-6">
                    {
                        services?.map((service, index) => (
                            <div data-aos='fade-in' data-aos-delay={`${index}00`} key={service.id} className="flex items-center gap-2 md:gap-4 py-2 px-3 md:pl-5 md:py-3.5 md:pr-11  border border-[#B0A79B] cursor-pointer text-iron font-roboto text-sm md:text-base lg:text-lg">
                                <div className="w-4 h-4 md:w-6 md:h-6 relative">
                                    <ImgUI src={service.img} alt={'Icon'} objectFitContain={true} card={true}/>
                                </div>
                                <span>{service.text}</span>
                            </div>
                        ))
                    }
                </div>
                <div className="pt-10">
                    <h4 data-aos='fade-up' className="flex items-center gap-x-[10px] text-lg">
                        <RxInfoCircled className="text-customGrey text-xl" />
                        <span className="font-roboto font-medium">{t('roomInner.allComforts')}</span>
                    </h4>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-x-5 lg:gap-x-[30px] gap-y-[10px] max-md:text-sm lg:text-lg font-roboto mt-[10px]">
                        {room?.room_characteristics?.map((item, index) => (
                            <li data-aos='fade-left' data-aos-delay={`${index}9`} key={item.id} className="flex items-center gap-2 md:gap-x-[10px]">
                                <IoMdCheckmark className="md:text-xl text-customGrey" />
                                {langSelect(i18n.language  , item?.title_ru , item?.title_en , item?.title_uz)}
                            </li>
                        ))}
                    </ul>
                </div>
           </SectionUI>
            <SectionUI padding={'pb-10 '} >
                <div className="space-y-5 md:space-y-10">
                    <SectionTitle title={t('index.section5.title')} />
                    <GallerySlider gallery={room?.room_gallery} />
                </div>
            </SectionUI>
           <div className="bg-white w-full duration-300 bottom-0 left-0 righ-0 sticky z-[10] shadow-sm py-5 border-t border-brown">
                <div className="container flex flex-wrap items-center  justify-center md:justify-between gap-y-3 gap-x-5">
                    <div className="text-2xl font-elegance shrink-0">
                        {t('index.room')} {langSelect(i18n.language  , room?.title_ru , room?.title_en , room?.title_uz)}
                    </div>
                    <div
                        className='flex shrink-0 leading-normal divide-x divide-iron/50 gap-y-1 items-center text-iron font-roboto text-sm md:text-base lg:text-lg tracking-[0.4px] xl:text-xl '>
                            <p className="px-3 py-1 flex gap-x-2 items-center"> <span> <MdOutlinePhotoSizeSelectSmall className={'text-lg'} /></span> <span>{room?.room_size} {t('roomInner.areaSymbol')}</span></p>
                        <p className="px-3 py-1 flex gap-x-2 items-center"><span> <MdOutlineBedroomParent
                            className={'text-lg'}/></span> <span> {room?.capacity} {t('roomInner.humenSymbol')}</span></p>
                        <p className="px-3 py-1 flex gap-x-2 items-center">
                            <span> <MdOutlineBathroom className={'text-lg'}/></span> <span
                            className={'text-nowrap'}>  {room?.num_bathrooms} {room?.num_bathrooms > 1 ? t('roomInner.filterSymbol') : t('roomInner.filterSymbols')}</span>
                        </p>
                        <p className="px-3 py-1 flex gap-x-2 items-center">
                            <span> <MdBalcony className={'text-lg'}/></span> <span
                            className={'text-nowrap'}>{room?.num_balconies} {t('roomInner.balconySymbol')}</span>
                        </p>
                    </div>

                    <div>
                        <ButtonUI paddingFull={true} text={t('btn.booking')} href={'/reservation?room-type=' + (room ? roomTypes.filter((roomType) => roomType.roomId === room.id)[0].beRoomType : '')} />
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Room

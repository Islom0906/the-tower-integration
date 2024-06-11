import SEO from '@/SEO/SEO'
import {indexSEO} from '@/SEO/SEO.config'
import {  Header, SectionTitle,    SectionUI } from '@/components/'
import { useTranslation } from 'react-i18next'
import axios from "axios";
import {langSelect} from "@/helper";
import BeSearchForm from "../components/be-forms/be-search-form";
import dynamic from "next/dynamic";
const SwiperSlider = dynamic(() => import('@/components/swiper-slider/swiper-slider') , { ssr: false })
const GallerySlider = dynamic(() => import('@/components/gallery-slider/gallery-slider') , { ssr: false })
const IndexAbout = dynamic(() => import('@/components/index-section/about') , { ssr: false })
const LocationInfos = dynamic(() => import('@/components/location-infos/location-infos') , { ssr: false })

const Home = ({home , about , rooms , services , news , landmarks ,gallery}) => {
  const {t , i18n} = useTranslation()
    return (
        <div>
            <SEO
              ogImage={'/logo.png'}
              title={indexSEO[i18n.language].title}
              description={indexSEO[i18n.language].description}
              ogTitle={indexSEO[i18n.language].ogTitle}
              ogDescription={indexSEO[i18n.language].ogDescription}
              twitterHandle={indexSEO[i18n.language].twitterHandle}
            />
            <Header home={home} />
            <section className="py-10">
                <div className="container">
                    <BeSearchForm dataFormMain={true}/>
                </div>
            </section>
            <SectionUI bgFigureTopPostion={'top-0 left-0'} padding={'py-10 md:py-20 lg:py-[90px] lg:pt-32 xl:pt-[180px]'}>
                <IndexAbout about={about}/>
            </SectionUI>
            <SectionUI padding={'pt-10 md:pt-20 lg:pt-[90px] pb-5 md:pb-11'} >
                <div className="space-y-5 md:space-y-10">
                    <div className='flex'>
                    <SectionTitle title={t('index.section2.title')} href={'/rooms'}   btnText={t('btn.allNums')} />
                    </div>
                    <SwiperSlider hotelCardData={rooms?.results} />
                </div>
            </SectionUI>
            <SectionUI   padding={'py-10 md:py-20 lg:pt-[54px] lg:pb-[100px]'}>
                <div className="pb-5 md:pb-10">
                    <SectionTitle title={t('index.section3.title')}/>
                </div>
                <SwiperSlider services={services} xlSlidesPerView={4} />
            </SectionUI>
            <SectionUI bgGold={true} langmark={true}  padding={'py-[20px] md:py-[50px] py-[90px] relative'}>
                <div className='relative z-[5]'>
                    <SectionTitle title={t('index.section4.title')} colorContent={true} />
                    <div className='grid grid-cols-2 xl:grid-cols-3 xl:gap-y-5 gap-5 md:gap-x-20 2xl:gap-x-[150px] py-10'>
                        {
                            landmarks?.map(item => (
                                <LocationInfos key={item?.id} title={langSelect(i18n.language , item?.title_ru, item?.title_en , item?.title_uz )} icon={item?.image} locations={item?.landmarks} />
                            ))
                        }
                    </div>
                </div>
            </SectionUI>
            <SectionUI padding={'py-10 md:py-20 lg:py-[90px]'} >
                <div className="space-y-5 md:space-y-10">
                    <SectionTitle title={t('index.section5.title')}  btnText={t('btn.viewAllPhoto')} href={'/gallery'}/>
                    <GallerySlider gallery={gallery?.images} />
                </div>
            </SectionUI>
            {/*<section className="relative py-10 lg:py-[87px] bg-black/60 overflow-hidden">*/}
            {/*    <div className="absolute top-0 left-0 z-10 w-full h-full">*/}
            {/*        /!*<ImgUI src={'/image/IMG_7359-min.jpg'} priority={true}  alt={'banner'}/>*!/*/}
            {/*    </div>*/}
            {/*    <div className="bg-black/60 w-full h-full absolute top-0 left-0 z-[11]"></div>*/}
            {/*    <div className="container relative z-20 flex flex-col items-center">*/}
            {/*        <div className="text-white flex flex-col items-center max-w-[690px]">*/}
            {/*            <SectionTitle justify={'justify-center'} title={t('index.section6.title')} colorContent={'text-white'}/>*/}
            {/*            <p  data-aos='fade-up' data-aos-delay='100' className="my-2 text-sm text-center font-roboto md:text-lg lg:text-xl md:mb-5 ">{t('index.section6.subtitle')}</p>*/}
            {/*            <div  data-aos='fade-up' data-aos-delay='150'>*/}
            {/*                <ButtonUI text={t('btn.more')} stylePadding={'py-2.5 px-6'} btnBorder={true} btnWhiteBorder={true}/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            <SectionUI padding={'pb-8 md:pb-16 lg:pb-[100px]'}>
                <div className="pb-5 md:pb-10">
                    <SectionTitle title={t('index.section7.title')} btnText={t('btn.allNews')} href={'/news'}  />
                </div>
                <SwiperSlider newsCard={news?.results} />
            </SectionUI>
        </div>
    )
}

export default Home


export async function getServerSideProps({res}) {
    res.setHeader(
        "Cache-Control",
        "no-cache"
    );
    // Fetch data from external API
    const [home, about , rooms ,services , news ,landmarks, gallery ] = await Promise.all([
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/pages/index/`),
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/pages/about/index/`),
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/rooms/?page=1&page_size=10`),
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/services/?page=1&page_size=10`),
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/pages/news/`),
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/landmarkcategories/`),
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/pages/gallery/`),
    ]);
    return {
        props: {
            home: home?.data,
            about: about?.data,
            rooms: rooms?.data,
            services: services?.data?.results,
            news: news?.data,
            landmarks: landmarks?.data,
            gallery: gallery?.data
        },
    };
}

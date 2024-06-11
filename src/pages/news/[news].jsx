import SEO from '@/SEO/SEO'
import { SectionUI } from '@/components'
import { LuCalendarRange } from 'react-icons/lu'
import {useRouter} from "next/router";
import {formatDate, langSelect} from "@/helper";
import BeSearchForm from "../../components/be-forms/be-search-form";
import {useTranslation} from "react-i18next";
import axios from "axios";
import dynamic  from "next/dynamic";
const Slider = dynamic(() => import('@/components/slider/slider'),{ssr:false})
const  News = ({newsInner}) => {
  const router = useRouter()
  const { i18n  } = useTranslation();



  return (
    <>
   <SEO
        ogImage={'/logo.png'}
                title={langSelect(i18n.language, newsInner?.title_ru , newsInner?.title_en , newsInner?.title_uz)}
                ogTitle={langSelect(i18n.language, newsInner?.title_ru , newsInner?.title_en , newsInner?.title_uz)}
                twitterHandle={langSelect(i18n.language, newsInner?.title_ru , newsInner?.title_en , newsInner?.title_uz)}
            />
    
    <SectionUI  bgFigureTopPostion={'top-0 right-0'} padding={'py-10 lg:pb-32 xl:pb-[180px]'}>
        <BeSearchForm/>
        <div data-aos='fade-in' className='relative z-[5] md:float-left w-full lg:w-[450px] xl:w-[650px] h-[275px] xl:h-[350px] md:mr-10 mb-5'>
          <Slider SliderContent={newsInner?.images}  PaginationInner={true} />
        </div>
        <h3 data-aos='fade-left' className='text-xl 2xl:text-2xl font-elegance font-semibold'>
            {
                langSelect(i18n.language, newsInner?.title_ru , newsInner?.title_en , newsInner?.title_uz)
            }
         </h3>
        <div data-aos='fade-left' data-aos-delay='100' className='flex items-center py-3 space-x-3'>
          <LuCalendarRange className="md:text-xl text-lg pb-[3px] text-brown" />
          <p className={`font-roboto font-medium text-sm text-[#575757]`}>
              {
                formatDate(newsInner?.created_at)
              }
          </p>
        </div>
        <p data-aos='fade-up' className='text-justify font-roboto text-[#575757]'>
            {
                langSelect(i18n.language, newsInner?.description_ru , newsInner?.description_en , newsInner?.description_uz)
            }
        </p>
    </SectionUI>
    </>
  )}

export async function getServerSideProps({ params }) {
  const { news } = params;

  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/pages/news/${news}`);
  const newsInner = res.data;
  return {
    props: {
      newsInner,
    },
  };
}

export default News
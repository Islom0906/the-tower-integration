import { LuCalendarRange } from "react-icons/lu";
import { HiArrowRight } from "react-icons/hi";
import { ImgUI } from '..'
import { useTranslation } from "react-i18next";
import Skeleton from "react-loading-skeleton";
import moment from "moment";
import Link from "next/link";

const NewsCard = ({img, date, decr, href}) => {
  const {t} = useTranslation()
  return (
    //
    <Link data-aos='fade-up' href={href} className={`block group w-full  aspect-[14/16] lg:aspect-[16/18]  relative overflow-hidden card-shadow font-roboto `}>
      <div className='duration-300  group-hover:scale-[1.1] absolute top-0 left-0 w-full h-full z-[8] '>
        <ImgUI src={img} card={true} quality={90} priority={false} imageStyle={'object-center'}   objectFitContain={false} alt={decr}/>
      </div>
      <div className=' bg-gradient-to-t from-black/50  md:from-black/30  from-20% w-full h-full absolute top-0 left-0 z-[9]'></div>
      <div className='w-full h-full duration-300 z-10 flex flex-col justify-end gap-4  overflow-hidden '>
        <div className="relative z-10 duration-300 overflow-hidden  flex flex-col group-hover:pl-6 px-5 pb-4 md:pb-6 text-white space-y-2 before:h-full -translate-x-2 group-hover:translate-x-0 before:bg-brown before:absolute before:top-0 before:left-0 before:w-2 before:duration-300 before:rounded-tr before:z-[99]">
          <div className='flex items-center gap-x-2 '>
            <LuCalendarRange className="md:text-xl text-base mb-1" />
            <p className={` font-medium text-xs `}>{  moment(date).format('L')}</p>
          </div>
          <h6 className={` text-sm md:text-xl  line-clamp-3 md:line-clamp-2`}>{decr}</h6>
          <div className={` max-md:text-xs w-fit flex items-center gap-x-2 `}>
            {t('btn.more')}
            <HiArrowRight className="group-hover:md:ml-3 duration-300" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default NewsCard
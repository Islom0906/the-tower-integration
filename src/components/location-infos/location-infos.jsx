import { ImgUI } from ".."
import {langSelect} from "@/helper";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

const LocationInfos = ({title, icon, alt, locations}) => {
    const {lang} = useSelector(state => state.langSlice)
    const {t} = useTranslation()
  return (
    <div className='text-white'>
      <div data-aos='fade-up'  className='flex gap-x-3 md:gap-x-5 pb-[10px] max-sm:h-14'>
        <div className="w-6 h-6 relative shrink-0">
          <ImgUI src={icon} alt={'icon'} objectFitContain={true}/>
        </div>
        <h3 className='text-lg font-medium leading-none'>{title}</h3>
      </div>
      <ul data-aos='fade-up' data-aos-delay={300} className='space-y-[5px] md:space-y-[10px]'>
        {
          locations.map((location) => (
            <li key={location?.id} className='flex justify-between text-sm lg:text-base gap-4 md:gap-10 font-thin'>
              <p>{ langSelect(lang ,location?.title_ru, location?.title_en , location?.title_uz ) }</p>
              <p className="shrink-0 text-[12px] lg:text-base"> <span>{location?.distance}</span> <span>{location?.distance_type === 'km' ? t('index.section4.km') : t('index.section4.m')}</span> </p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default LocationInfos
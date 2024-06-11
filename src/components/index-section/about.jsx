import React from 'react';
import {ButtonUI, ImgUI, SectionTitle} from "@/components";
import {langSelect} from "@/helper";
import {useTranslation} from "react-i18next";

const IndexAbout = ({about}) => {
  const {t , i18n} = useTranslation()

  return (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="space-y-3 md:space-y-5 ">
          <SectionTitle styleSubtitle={'text-start'} title_ru={about?.title_ru} title_en={about?.title_en} title_uz={about?.title_uz} />
          <p data-aos='fade-up' data-aos-delay='100' className="text-justify section-text"> {langSelect(i18n.language ,about?.sub_title_ru, about?.sub_title_en , about?.sub_title_uz )} </p>
          <div className="flex justify-center md:justify-start" data-aos='fade-up' data-aos-delay='120'>
            <ButtonUI btnNews={true} text={t('btn.readMore')} btnBorder={true} href={'/about'}/>
          </div>
        </div>
        <div className="relative flex flex-col md:items-end aspect-square lg:aspect-auto">
          <div data-aos='zoom-in' data-aos-delay='50' className="w-[62%] aspect-square xl:h-[78%] xl:w-[68%] lg:w-full lg:h-1/2 border-[10px] lg:border-x-[0px] lg:border-b-[10px] xl:border-[10px] border-white relative z-10 overflow-hidden">
            <ImgUI  src={about?.image_1}   alt={about?.title_en} priority={false} />
          </div>
          <div data-aos-anchor-placement='top center'  data-aos='zoom-in' data-aos-delay='150' className="w-[62%] aspect-square lg:w-full lg:h-1/2 xl:h-[62%] xl:w-[55%] absolute bottom-8 md:bottom-0 right-0 md:left-0 max-md:border-[10px] border-white z-20 md:z-[9] overflow-hidden">
            <ImgUI  src={about?.image_2} priority={false}  alt={about?.title_en}/>
          </div>
        </div>
      </div>
  );
};

export default IndexAbout;
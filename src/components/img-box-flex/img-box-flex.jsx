import { SectionTitle} from "@/components";
import {langSelect} from "@/helper";
import dynamic from "next/dynamic";
import {useTranslation} from "react-i18next";

const Slider = dynamic(() => import('@/components/slider/slider') )

const ImgBoxFlex = ({ title_ru , title_uz , title_en, subTitle_ru , subTitle_uz ,subTitle_en,   imgOrder  ,images}) => {
  const { i18n  } = useTranslation();
  return (
    <div id={title_uz} className="grid items-center grid-cols-1 gap-5 py-5  md:grid-cols-2 md:gap-10 lg:gap-16">
      <div
        className={`${  
          imgOrder ? "order-2" : "order-1"
        }  space-y-4 md:space-y-8`}
      >
        <SectionTitle title_ru={title_ru} title_en={title_en} title_uz={title_uz} />
        <p  data-aos='fade-up' data-aos-delay='200' className="text-justify section-text">{langSelect(i18n.language ,subTitle_ru, subTitle_en , subTitle_uz )}</p>
      </div>
      <div
      data-aos='zoom-in'
      data-aos-delay='150'
        className={`${
          imgOrder ? "order-2 md:order-1" : "order-1 md:order-2"
        } w-full aspect-video md:aspect-[16/14] room-slider`}
      >
          <Slider SliderContent={images} PaginationInner={true} card={false} Quality={100} />
      </div>
    </div>
  );
};

export default ImgBoxFlex;

import {ButtonUI} from "@/components";
import {langSelect} from "@/helper";
import {useTranslation} from "react-i18next";

const SectionTitle = ({ title, title_ru , title_uz , title_en, subTitle_ru , subTitle_uz ,subTitle_en, colorContent, justify, btnText, styleSubtitle , href }) => {
  const { i18n  } = useTranslation();

  return (
    
    <div className={`flex gap-y-5 w-full items-center  ${btnText ? 'justify-between' : justify}`}>
      <div className='flex flex-col items-center'>
         <h2 data-aos='fade-up' className={` ${colorContent && "text-white" } ${styleSubtitle && styleSubtitle} section-title  text-center ${subTitle_ru && 'mb:3 md:mb-5'}`}>{langSelect(i18n.language ,title_ru, title_en , title_uz )}</h2>
          <h2 data-aos='fade-up' className={` ${colorContent && "text-white" } ${styleSubtitle && styleSubtitle} section-title  text-center ${subTitle_ru && 'mb:3 md:mb-5'}`}>{title}</h2>
         <p  data-aos='fade-up' data-aos-delay='100' className={`text-center section-text  ${colorContent && "text-white" }`}>{langSelect(i18n.language ,subTitle_ru, subTitle_en , subTitle_uz )}</p>
      </div>
      {
        btnText && 
        <div  data-aos='fade-up' data-aos-delay='120'>
          <ButtonUI text={btnText} btnBorder={true} href={href} stylePadding={'py-2.5 md:py-3.5 px-6 md:w-full'}  />
        </div>
      }
      
    </div>
  )
}

export default SectionTitle
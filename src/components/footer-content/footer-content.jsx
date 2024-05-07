import { useTranslation } from "react-i18next"

const FooterContent = ({title , list, paragraph, hrefText, textJustify}) => {
  const {t} = useTranslation()
  return (
    <>
    <div>
            <h3 className={`mb-1 md:mb-2 md:text-xl font-roboto ${textJustify} md:text-start`}>{title}</h3>
            <ul className={`space-y-2 font-light font-roboto`}>
              {
                list?.map((item , index) => (
                  <li key={index} className={`max-md:text-sm ${textJustify} md:text-start`}>
                    <a href={item.link} className={`w-full block`}>
                      {item.name}
                    </a></li>
                ))
              }
              {
                paragraph && 
                <p className='font-light font-roboto mb-1'>{paragraph}</p>
              }
              {
                hrefText && 
                <li className={`${textJustify} md:text-start`}>
                  <a href={hrefText} className='max-md:text-sm text-iron font-light font-roboto underline decoration-1'>{t('links.viewReviews')}</a>
                </li>
              }
            </ul>
          </div>
    </>
  )
}

export default FooterContent
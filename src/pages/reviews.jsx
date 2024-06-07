import { SectionTitle, SectionUI} from '@/components'
import {indexSEO} from '@/SEO/SEO.config'
import SEO from '@/SEO/SEO'
import {useTranslation} from "react-i18next";

import BeSearchForm from "../components/be-forms/be-search-form";
import BeReviewsForm from "../components/be-forms/be-reviews-form";

const Reviews = () => {
  const { i18n,t  } = useTranslation();


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
      <SectionUI bgFigureTopPostion={'top-0 left-0'} padding={'py-10 lg:pb-[50px] pt-10'}>
        <BeSearchForm/>
      </SectionUI>
      <SectionUI padding={'pb-10 md:pb-16 lg:pb-[100px] space-y-10 md:space-y-20'}>
        <div className={'mb-5'}>
          <SectionTitle title={t('reviews.reviewClients')} justify={'justify-center'} />
        </div>
        <div className={'mb-5'}>
          <BeReviewsForm/>
        </div>

      </SectionUI>
    </div>
  )
}
export default Reviews
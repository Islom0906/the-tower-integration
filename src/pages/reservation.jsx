import {SectionTitle, SectionUI} from '@/components/'
import SEO from '@/SEO/SEO';
import {reservationSEO} from "@/SEO/SEO.config"
import BeBookingForm from "../components/be-forms/be-booking-form";
import {useTranslation} from "react-i18next";

const Reservation = () => {
  const { i18n ,t  } = useTranslation();

    return (
        <div className="wrapper">
            <SEO
                ogImage={'/logo.png'}
                title={reservationSEO[i18n.language].title}
                description={reservationSEO[i18n.language].description}
                ogTitle={reservationSEO[i18n.language].ogTitle}
                ogDescription={reservationSEO[i18n.language].ogDescription}
                twitterHandle={reservationSEO[i18n.language].twitterHandle}
            />
            <SectionUI padding={'py-10 md:py-20  md:pb-[90px]'}>
                <div className={'mb-10'}>
                    <SectionTitle title={t('booking.headerTitle')}  subTitle={t('booking.headerSubtitle')} justify={'justify-center'}/>
                </div>
                <BeBookingForm/>
            </SectionUI>
        </div>
    )
}

export default Reservation


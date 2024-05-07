import {SectionTitle, SectionUI} from '@/components/'
import {useSelector} from "react-redux";
import SEO from '@/SEO/SEO';
import {reservationSEO} from "@/SEO/SEO.config"
import {t} from "i18next";
import BeBookingForm from "../components/be-forms/be-booking-form";

const Reservation = () => {
    const {lang} = useSelector(state => state.langSlice)

    return (
        <div className="wrapper">
            <SEO
                ogImage={'/logo.png'}
                title={reservationSEO[lang].title}
                description={reservationSEO[lang].description}
                ogTitle={reservationSEO[lang].ogTitle}
                ogDescription={reservationSEO[lang].ogDescription}
                twitterHandle={reservationSEO[lang].twitterHandle}
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


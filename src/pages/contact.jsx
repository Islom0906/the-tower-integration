import SEO from '@/SEO/SEO';
import { SectionTitle, SectionUI , MesengerList } from '@/components/'
import { useTranslation } from 'react-i18next';
import {contactSEO} from "@/SEO/SEO.config"
import axios from "axios";
import {formatPhoneNumber, langSelect} from "@/helper";
import BeSearchForm from "../components/be-forms/be-search-form";


const Contact = ({contact}) => {
  const {t , i18n} = useTranslation()
  return (
    <>
      <SEO
              ogImage={'/logo.png'}
              title={contactSEO[i18n.language].title}
                description={contactSEO[i18n.language].description}
                ogTitle={contactSEO[i18n.language].ogTitle}
                ogDescription={contactSEO[i18n.language].ogDescription}
                twitterHandle={contactSEO[i18n.language].twitterHandle}
            />
      <SectionUI bgFigureTopPostion={'-top-20 -left-1/2'} padding={'py-10'}>
        <BeSearchForm/>
        <div className="grid items-center grid-cols-1 gap-10">
          {/* section title */}
          <div>
            <div className="mb-5 md:mb-10">
              <SectionTitle title={langSelect(i18n.language , contact?.title_ru, contact?.title_en , contact?.title_uz )} justify={'justify-center'} />
            </div>
            <div data-aos='fade-up'  data-aos-delay='0.2' className="space-y-2 md:space-y-5 text-center font-roboto">
              <a className="block" href={`tel:${contact?.phone}`}>
                <p className="space-x-2">
                  <span className="text-base md:text-xl text-iron">
                    {
                      t('contact.phone')
                    }
                  </span>
                  <span  className={'text-[#575757]'}>{
                    formatPhoneNumber(contact?.phone)
                  }</span>
                </p>
              </a>
              <a className="block" href={`mailto:${contact?.email}`}>
                <p className="space-x-2">
                  <span className="text-base md:text-xl text-iron">
                  {
                      t('contact.mail')
                    }
                  </span>
                  <span className={'text-[#575757]'}>{contact?.email}</span>
                </p>
              </a>
              <p className="block" >
                <p className="space-x-2">
                  <span className="text-base md:text-xl text-iron">
                    {
                      t('contact.address')
                    }
                  </span>
                  <span className={'text-[#575757]'}>
                   { langSelect(i18n.language ,contact?.address_ru , contact?.address_en ,contact?.address_uz )}
                  </span>
                </p>
              </p>
            </div>
            <div data-aos='fade-up'  data-aos-delay='0.3' className="mt-5 flex justify-center">
              <MesengerList instagram={contact?.instagram} facebook={contact?.facebook}  youtube={contact?.youtube} />
            </div>
          </div>
          <div className="aspect-[16/14] md:aspect-[3/1] border-brown border rounded overflow-hidden focus:border-brown" data-aos='zoom-in' data-aos-delay='100'>
            <iframe
              className="w-full h-full border-brown"
              src={contact?.map}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </SectionUI>
    </>
  );
};

export async function getServerSideProps({ res}) {
  res.setHeader(
      "Cache-Control",
      "no-cache"
  );
  // Fetch data from external API
  const [contact ] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/pages/contact/`),

  ]);
  return {
    props: {
      contact: contact?.data,
    },
  };
}


export default Contact;

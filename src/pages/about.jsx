import SEO from '@/SEO/SEO';
import {ImgBoxFlex, ImgUI, MiniHeader, SectionTitle, SectionUI, Slider} from '@/components';
import { aboutUsSEO } from '@/SEO/SEO.config';
import axios from "axios";
import {langSelect} from "@/helper";
import BeSearchForm from "../components/be-forms/be-search-form";
import {useTranslation} from "react-i18next";

const About = ({about ,services}) => {
  const { i18n  } = useTranslation();


  return (
      <div className="wrapper">
        <SEO
              ogImage={'/logo.png'}
              title={aboutUsSEO[i18n.language].title}
                description={aboutUsSEO[i18n.language].description}
                ogTitle={aboutUsSEO[i18n.language].ogTitle}
                ogDescription={aboutUsSEO[i18n.language].ogDescription}
                twitterHandle={aboutUsSEO[i18n.language].twitterHandle}
            />
              <MiniHeader imageStyle={'object-center'} img={about?.header?.image} title={langSelect(i18n.language ,about?.header?.title_ru ,about?.header?.title_en , about?.header?.title_uz)}/>
              <SectionUI bgFigureTopPostion={'top-0 left-0'} bgFigureBottomPostion={'bottom-0 left-0'}
                     padding={"py-10"}>
                  <BeSearchForm/>
              <div className="relative space-y-5 md:space-y-10 z-5">
                  <SectionTitle
                      lang={i18n.language}
                      title_ru={about?.title_ru}
                      title_uz={about?.title_uz}
                      title_en={about?.title_en}
                      subTitle_ru={about?.sub_title_ru}
                      subTitle_uz={about?.sub_title_uz}
                      subTitle_en={about?.sub_title_en}
                  />
                  <div className="w-full  aspect-video lg:aspect-[5/2]">
                      <Slider Quality={100} SliderContent={about?.images} PaginationInner={true}   card={false} />
                  </div>
              </div>
          </SectionUI>
          <SectionUI bgGold={true}>
              <div className="space-y-5 md:space-y-10">
                  <SectionTitle
                      colorContent={"text-white"}
                      title_ru={about?.additional_info?.title_ru}
                      title_en={about?.additional_info?.title_en}
                      title_uz={about?.additional_info?.title_uz}
                      subTitle_ru={about?.additional_info?.sub_title_ru}
                      subTitle_en={about?.additional_info?.sub_title_en}
                      subTitle_uz={about?.additional_info?.sub_title_uz}
                  />

                  <div className="grid grid-cols-3 gap-1.5 md:gap-[30px]">
                      {
                          about?.additional_info?.images?.map(item => (
                              <div data-aos='zoom-in' key={item?.id} data-aos-delay='100' className="w-full relative aspect-square">
                                  <ImgUI src={item?.image} alt="about" card={true} />
                              </div>
                          ))
                      }
                  </div>
              </div>
          </SectionUI>
          <SectionUI  bgFigureTopPostion={'top-0 -right-2/3  '}
                     padding={'pb-[20px] md:pb-[50px] lg:pb-[90px] pt-10 md:pt-[100px] lg:pt-[180px]'}>
          {
              services?.map((service , ind) => (

              <ImgBoxFlex key={service?.id} imgOrder={ind % 2}  title_uz={service?.title_uz} title_ru={service?.title_ru} title_en={service?.title_en} subTitle_ru={service?.description_ru} subTitle_en={service?.description_uz} subTitle_uz={service?.description_uz} images={service?.images} />
              ))
          }
          </SectionUI>
      </div>
  );
};

export default About;


export async function getServerSideProps({ res}) {
    res.setHeader(
        "Cache-Control",
        "no-cache"
    );
    // Fetch data from external API
    const [about, services ] = await Promise.all([
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/pages/about/`),
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/services/`),

    ]);
    return {
        props: {
            about: about?.data,
            services: services?.data?.results,

        },
    };
}

import {
    SectionUI,
    MiniHeader,
    RoomsRow
} from "@/components"
import { useTranslation } from "react-i18next";
import SEO from "@/SEO/SEO";
import {roomsSEO} from "@/SEO/SEO.config"
import axios from "axios";
import {langSelect} from "@/helper";
import BeSearchForm from "../../components/be-forms/be-search-form";

const index = ({rooms , roomsHeader}) => {
  const { i18n  } = useTranslation();

    return (
        <div>

            <SEO
              ogImage={'/logo.png'}
              title={roomsSEO[i18n.language]?.title}
                description={roomsSEO[i18n.language]?.description}
                ogTitle={roomsSEO[i18n.language]?.ogTitle}
                ogDescription={roomsSEO[i18n.language]?.ogDescription}
                twitterHandle={roomsSEO[i18n.language]?.twitterHandle}
            />
            <div>
                <MiniHeader img={roomsHeader.header_image} title={langSelect(i18n.language , roomsHeader?.title_ru , roomsHeader?.title_en , roomsHeader?.title_uz)}/>
            </div>
            <SectionUI bgFigureTopPostion={'top-0 left-0'}
                       padding={'py-10 lg:pb-[90px]'}>
                <BeSearchForm/>

                <div className="grid grid-cols-1 gap-5 lg:gap-[30px] ">
                    {
                        rooms?.results &&

                        rooms?.results?.map((card) => (
                                <>
                                    <RoomsRow key={card?.id} order={card?.id} card={card}/>
                                </>

                            ))
                    }
                </div>
            </SectionUI>
        </div>
    )
}
export async function getServerSideProps({res}) {
    res.setHeader(
        "Cache-Control",
        "no-cache"
    );
    // Fetch data from external API
    const [rooms ,roomsHeader ] = await Promise.all([
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/rooms/`),
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/roompage/`),

    ]);
    return {
        props: {
            rooms: rooms?.data,
            roomsHeader : roomsHeader?.data

        },
    };
}

export default index

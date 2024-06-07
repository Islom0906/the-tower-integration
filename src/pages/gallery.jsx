import SEO from "@/SEO/SEO";
import {GalleryZoomInner, SectionUI, MiniHeader} from "@/components";
import {gallerySEO} from '@/SEO/SEO.config'
import axios from "axios";
import {langSelect} from "@/helper";
import BeSearchForm from "../components/be-forms/be-search-form";
import {useTranslation} from "react-i18next";

const Gallery = ({galleryData}) => {
  const { i18n  } = useTranslation();

    return (
        <>
            <SEO
                ogImage={'/logo.png'}
                title={gallerySEO[i18n.language].title}
                description={gallerySEO[i18n.language].description}
                ogTitle={gallerySEO[i18n.language].ogTitle}
                ogDescription={gallerySEO[i18n.language].ogDescription}
                twitterHandle={gallerySEO[i18n.language].twitterHandle}
            />
            <div>
                <MiniHeader img={galleryData?.header_image}
                            title={langSelect(i18n.language, galleryData?.title_ru, galleryData?.title_en, galleryData?.title_uz)}/>
            </div>
            <SectionUI padding='py-10'>
                <BeSearchForm/>
                <GalleryZoomInner images={galleryData?.images}/>
            </SectionUI>
        </>

    )
}

export async function getServerSideProps({res}) {
    res.setHeader(
        "Cache-Control",
        "no-cache"
    );
    // Fetch data from external API
    const [galleryData] = await Promise.all([
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/pages/gallery/`),

    ]);
    return {
        props: {
            galleryData: galleryData?.data,
        },
    };
}

export default Gallery
import { NextSeo } from 'next-seo';

const SEO = ({ title, description, canonical, ogUrl, ogTitle, ogDescription, ogImage, twitterHandle, twitterSite, twitterCardType }) => (
    <NextSeo
        title={title}
        description={description}

        canonical={canonical}
        openGraph={{
            url: ogUrl,
            title: ogTitle,
            description: ogDescription,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: 'The Tower Hotel Tashkent',
                    type: 'image/png',
                },
            ],
            siteName: 'The Tower Hotel Tashkent',
            link: [
                {
                    rel: 'icon',
                    href: '/logo.png',
                },
            ],
        }}
        additionalLinkTags={[
            {
                rel: 'icon',
                href: ogImage,
            },
            {
                rel: 'The-Tower-Hotel-Tashkent',
                href: ogImage,
                sizes: '76x76'
            },

        ]}
        twitter={{
            handle: twitterHandle,
            site: twitterSite,
            cardType: twitterCardType,
        }}
        additionalMetaTags={[
            {
                name: 'googlebot',
                content: 'index,follow',
            },
            {
                name: 'robots',
                content: 'index,follow',
            },
        ]}

    />
);

export default SEO;
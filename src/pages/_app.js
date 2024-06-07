import "@/styles/globals.css";
import "@/styles/be-styles.css";
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { HydrationProvider, Client } from "react-hydration-provider";
import {QueryClientProvider, QueryClient} from "react-query";
import Layout from "@/Layout";
import "../localization/i18n";
import { El_Messiri, Open_Sans} from "next/font/google";
import NextNProgress from "nextjs-progressbar";


const open_sans
    = Open_Sans
({
    weight: ["300" ,"400" , "500" , "600"],
    subsets: ['cyrillic', 'latin'],
    variable: '--font-Open_Sans',
})


const elegance = El_Messiri({
    subsets: ['cyrillic', 'latin'],
    weight:[   "400" , "500" , "700" ],
    variable: '--font-el_messiri',
})





export default function App({ Component, pageProps }) {

  const queryClient = new QueryClient();

    return (
        <HydrationProvider>
            <QueryClientProvider client={queryClient}>
                        <Client>
                            <main
                                className={`  ${elegance.variable} ${open_sans.variable} `}>

                                <Layout>
                                    <NextNProgress color={'white'} startPosition={0.3} stopDelayMs={200} height={3}/>
                                    <Component {...pageProps} />
                                </Layout>
                            </main>
                        </Client>
            </QueryClientProvider>
        </HydrationProvider>)
}

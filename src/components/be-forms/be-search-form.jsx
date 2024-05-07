import {useRouter} from "next/router"
import React, { useEffect } from 'react'
import {useTranslation} from "react-i18next";

const BeSearchForm = (props) => {
    const { i18n  } = useTranslation();

    const searchForm = (w) => {
        !function(e,n){
            var t="bookingengine",o="integration",i=e[t]=e[t]||{},a=i[o]=i[o]||{},r="__cq",c="__loader",d="getElementsByTagName";
            if(n=n||[],a[r]=a[r]?a[r].concat(n):n,!a[c]){a[c]=!0;var l=e.document,g=l[d]("head")[0]||l[d]("body")[0];
                !function n(i){if(0!==i.length){var a=l.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://"+i[0]+"/integration/loader.js",
                    a.onerror=a.onload=function(n,i){return function(){e[t]&&e[t][o]&&e[t][o].loaded||(g.removeChild(n),i())}}(a,(function(){n(i.slice(1,i.length))})),g.appendChild(a)}}(
                    ["uz-ibe.hopenapi.com","ibe.hopenapi.com","ibe.behopenapi.com"])}
        }(w,[
            ['setContext', 'BE-INT-thetowerhoteltashkent_2024-05-03', i18n.language],
            ['embed', 'search-form', {container: 'be-search-form'}]
        ]);
    }

    const { pathname } = useRouter();

    useEffect(() => {
        searchForm(window);
    }, [pathname, i18n.language]);

    return (
        <div id='block-search' className={'mb-10' + ((props.dataFormMain) ? ' main' : '')}>
            <div id='be-search-form' className='be-container'>
                <a href='https://exely.com/' rel='nofollow' target='_blank'>Hotel management software</a>
            </div>
        </div>
    )
}

export default BeSearchForm
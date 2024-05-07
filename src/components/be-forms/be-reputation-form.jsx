import React, { useEffect } from 'react'
import {useTranslation} from "react-i18next";

const BeReputationForm = () => {
    const { i18n  } = useTranslation();

    const reputationForm = (w) => {
        const formContainer = document.querySelector('#be-reputation-widget');

        if (formContainer) {
            formContainer.innerHTML = '';
        }

        !function(e,n){
            var t="bookingengine",o="integration",i=e[t]=e[t]||{},a=i[o]=i[o]||{},r="__cq",c="__loader",d="getElementsByTagName";
            if(n=n||[],a[r]=a[r]?a[r].concat(n):n,!a[c]){a[c]=!0;var l=e.document,g=l[d]("head")[0]||l[d]("body")[0];
                !function n(i){if(0!==i.length){var a=l.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://"+i[0]+"/integration/loader.js",
                    a.onerror=a.onload=function(n,i){return function(){e[t]&&e[t][o]&&e[t][o].loaded||(g.removeChild(n),i())}}(a,(function(){n(i.slice(1,i.length))})),g.appendChild(a)}}(
                    ["uz-ibe.hopenapi.com","ibe.hopenapi.com","ibe.behopenapi.com"])}
        }(w,[
            ['setContext', 'BE-INT-thetowerhoteltashkent_2024-05-03', i18n.language],
            ['embed', 'reputation-widget', {container: 'be-reputation-widget'}]
        ]);
    }

    useEffect(() => {
        reputationForm(window);
    }, [i18n.language]);

    return (
        <div id='be-reputation-widget'/>
    )
}

export default BeReputationForm
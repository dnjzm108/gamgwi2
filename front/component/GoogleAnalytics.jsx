import { useEffect } from "react";
import Head from 'next/head'

const GoogleAnalytics = () => {
    useEffect(() => {
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-DV6FR6T5JF');
    },[])

    return(
        <>
        <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DV6FR6T5JF"></script>
        </Head>
        </>
    )
}
export default GoogleAnalytics;
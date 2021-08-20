import { useEffect } from "react";
import Head from 'next/head'

const GoogleAnalytics = () => {
    useEffect(() => {
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-DV6FR6T5JF');
    }, [])

    return (
        <>
            <Head>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-DV6FR6T5JF"></script>
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="감성 글귀, Gamgwi" />
                <meta property="og:site_name" content="Gamgwi" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:url" content="http://hyejun.co.kr" />
                <meta property="og:image" content="https://hyejun.co.kr/logo.png" />
                <meta property="og:description" content="감성 글귀 기록" />
            </Head>
        </>
    )
}
export default GoogleAnalytics;
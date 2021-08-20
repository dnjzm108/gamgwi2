import '../index.css'
import wrapper from '../store/configureStore'
import '../css/index.css'
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"
import Head from 'next/head';
import GoogleAnalytics from '../component/GoogleAnalytics';

const App = ({ Component }) => {
    const store = useStore((state) => state);
    return (
        <>
            <Head>
            <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="감성 글귀, Gamgwi" />
                <meta property="og:site_name" content="Gamgwi" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:url" content="http://hyejun.co.kr" />
                <meta property="og:image" content="표시되는 이미지" />
                <meta property="og:description" content="감성 글귀 기록" /> 
            </Head>

            <GoogleAnalytics />
            
            <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
                <Component />
            </PersistGate>
        </>
    )
}

export default wrapper.withRedux(App)
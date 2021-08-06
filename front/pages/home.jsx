import Head from 'next/head'
import WebLayout from "../component/layout/webLayout"
import HomeContent from '../component/home/HomeContent'

const Home = () => {
    return (
        <>
            <Head>
                <title>Gamgwi | Home</title>
            </Head>
            <WebLayout>
                <HomeContent/>
            </WebLayout>
        </>
    )
}

export default Home
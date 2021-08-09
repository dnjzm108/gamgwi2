import Head from 'next/head'
import SearchBar from '../component/common/SearchBar'
import WebLayout from "../component/layout/webLayout"


const Likes = () => {
    return (
        <>
            <Head>
                <title>Gamgwi | 하트</title>
            </Head>
            <WebLayout>
                likes
                <SearchBar/>
            </WebLayout>
        </>
    )
}

export default Likes
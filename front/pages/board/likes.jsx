import Head from 'next/head'
import SearchBar from '../../component/common/SearchBar'
import WebLayout from "../../component/layout/webLayout"
import LikesList from '../../component/list/LikesList'


const Likes = () => {
    return (
        <>
            <Head>
                <title>Gamgwi | 하트</title>
            </Head>
            <WebLayout>
                <LikesList />
                <SearchBar/>
            </WebLayout>
        </>
    )
}

export default Likes
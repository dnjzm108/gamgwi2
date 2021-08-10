import Head from 'next/head'
import PostList from '../../component/list/PostList'
import WebLayout from "../../component/layout/webLayout"
import SearchBar from '../../component/common/SearchBar'

const List = () => {
    return (
        <>
            <Head>
                <title>Gamgwi | 글 목록</title>
            </Head>
            <WebLayout>
                <PostList />
                <SearchBar />
            </WebLayout>
        </>

    )
}

export default List
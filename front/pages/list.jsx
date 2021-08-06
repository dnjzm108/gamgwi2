import Head from 'next/head'
import PostList from '../component/list/PostList'
import WebLayout from "../component/layout/webLayout"

const List = () => {
    return (
        <>
            <Head>
                <title>Gamgwi | 글 목록</title>
            </Head>
            <WebLayout>
                <PostList />
                
            </WebLayout>
        </>

    )
}

export default List
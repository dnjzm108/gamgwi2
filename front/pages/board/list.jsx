import Head from 'next/head'
import { useRouter } from 'next/router'
import PostList from '../../component/list/PostList'
import WebLayout from "../../component/layout/webLayout"
import SearchBar from '../../component/common/SearchBar'

const data = [
    {
        id : '1',
        subject : '오늘의 글귀',
        writer : '냐오미',
        content : '책 읽기를 시작해보자',
        date : '2021-07-28',
        hit : '0'
    },
    {
        id : '2',
        subject : '오늘의 글귀2',
        writer : '냐오미',
        content : '늦어도 늦지 않다',
        date : '2021-07-28',
        hit : '0'
    },
    {
        id : '3',
        subject : '오늘의 글귀3',
        writer : '냐오미',
        content : '아무도 모르는 곳으로',
        date : '2021-07-28',
        hit : '0'
    },
    {
        id : '4',
        subject : '오늘의 글귀',
        writer : '냐오미',
        content : '책 읽기를 시작해보자',
        date : '2021-07-28',
        hit : '0'
    },
    {
        id : '5',
        subject : '오늘의 글귀2',
        writer : '냐오미',
        content : '늦어도 늦지 않다',
        date : '2021-07-28',
        hit : '0'
    },
    {
        id : '6',
        subject : '오늘의 글귀3',
        writer : '냐오미',
        content : '아무도 모르는 곳으로',
        date : '2021-07-28',
        hit : '0'
    },
    {
        id : '7',
        subject : '오늘의 글귀',
        writer : '냐오미',
        content : '책 읽기를 시작해보자',
        date : '2021-07-28',
        hit : '0'
    },
    {
        id : '8',
        subject : '오늘의 글귀2',
        writer : '냐오미',
        content : '늦어도 늦지 않다',
        date : '2021-07-28',
        hit : '0'
    },
    {
        id : '9',
        subject : '오늘의 글귀3',
        writer : '냐오미',
        content : '아무도 모르는 곳으로',
        date : '2021-07-28',
        hit : '0'
    },
    {
        id : '10',
        subject : '오늘의 글귀',
        writer : '냐오미',
        content : '책 읽기를 시작해보자',
        date : '2021-07-28',
        hit : '0'
    },
    {
        id : '11',
        subject : '오늘의 글귀2',
        writer : '냐오미',
        content : '늦어도 늦지 않다',
        date : '2021-07-28',
        hit : '0'
    },
    {
        id : '12',
        subject : '오늘의 글귀3',
        writer : '냐오미',
        content : '아무도 모르는 곳으로',
        date : '2021-07-28',
        hit : '0'
    },
]

const List = () => {
    const router = useRouter()
    const { post } = router.query

    const list = data.map((v)=>{
        return(
            <>
                <tr key={v.id}>
                    <td>{v.subject}</td>
                    {/* <td>{v.content}</td> */}
                    <td>{v.writer}</td>
                    <td>{v.date}</td>
                </tr>
            </>
        )
    })
    return (
        <>
            <Head>
                <title>Gamgwi | 글 목록</title>
            </Head>
            <WebLayout>
                <PostList list={list}/>
                <SearchBar />
            </WebLayout>
        </>

    )
}

export default List
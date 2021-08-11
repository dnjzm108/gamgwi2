import Head from 'next/head'
import { useRouter } from 'next/router'
import PostList from '../../component/list/PostList'
import WebLayout from "../../component/layout/webLayout"
import SearchBar from '../../component/common/SearchBar'
import { useDispatch } from 'react-redux'
import { PostGet_REQUEST } from '../../reducers/post'
import { useEffect } from 'react'

const data = [
    
]

const List = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(PostGet_REQUEST())
    },[])

    const router = useRouter()
    const { post } = router.query

    const list = data.map((v)=>{
        return(
            <>
                <tr key={v.id}>
                    <td>{v.subject}</td>
                    <td>{v.writer}</td>
                    <td>{v.hit}</td>
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
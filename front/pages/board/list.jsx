import Head from 'next/head'
import { useRouter } from 'next/router'
import PostList from '../../component/list/PostList'
import WebLayout from "../../component/layout/webLayout"
import SearchBar from '../../component/common/SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import { PostGet_REQUEST, PostView_REQUEST } from '../../reducers/post'
import { useEffect } from 'react'
import Router from "next/router"


const List = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(PostGet_REQUEST())
    }, [])


    // list 값 가져오기
    const data = useSelector(state => state.post.list)
    // console.log("data ===========", data);
    useEffect(() => {

    }, [data])

    let list = []
    if (data !== undefined) {

        const handleClick = (idx) => {
            //console.log(idx);

            dispatch(PostView_REQUEST(idx))

            //Router.push(`/board/view?idx=${idx}`)
            Router.push(`/board/view`)
        }

        list = data.map((v) => {
            return (
                <>
                    <tr key={v.id}>
                        <td onClick={()=>{handleClick(v.id)}}>{v.title}</td>
                        <td>{v.nickName}</td>
                        <td>{v.hit}</td>
                        <td>{v.date}</td>
                    </tr>
                </>
            )
        })
    }

    // const router = useRouter()
    // const { post } = router.query

    return (
        <>
            <Head>
                <title>Gamgwi | 글 목록</title>
            </Head>
            <WebLayout>
                <PostList list={list} />
                <SearchBar />
            </WebLayout>
        </>

    )
}

export default List
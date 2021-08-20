
import { useRouter } from 'next/router'
import Head from 'next/head'
import PostList from '../../component/list/PostList'
import WebLayout from '../../component/layout/WebLayout'
import SearchBar from '../../component/common/SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Router from 'next/router'
import { PostGet_REQUEST, PostView_REQUEST } from '../../reducers/post'


const Search = () => {
    const router = useRouter()
    const { category } = router.query
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(PostGet_REQUEST())
    }, [])

    const data = useSelector(state => state.post.searchData)

    useEffect(() => {

    }, [data])

    let list = []
    if (data !== undefined) {
        const handleClick = (idx) => {
            dispatch(PostView_REQUEST(idx))
            Router.push(`/board/view`)
        }
        list = data.map((v) => {
            return (
                <tr key={v.id}>
                    <td onClick={() => { handleClick(v.id) }}>{v.title}</td>
                    <td>{v.nickName}</td>
                    <td>{v.hit}</td>
                    <td>{v.date}</td>
                </tr>
            )
        })
    }



    return (
        <>
            <Head>
                <title>Gamgwi | {category}</title>
            </Head>
            <WebLayout>
                <PostList list={list} />
                <SearchBar />
            </WebLayout>
        </>
    )
}

export default Search
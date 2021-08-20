import Head from 'next/head'
import { useRouter } from 'next/router'
import PostList from '../../component/list/PostList'
import WebLayout from "../../component/layout/WebLayout"
import SearchBar from '../../component/common/SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import { PostGet_REQUEST, PostView_IDX } from '../../reducers/post'
import { useEffect } from 'react'
import Router from "next/router"

//infinity
const handleScroll = () =>{
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    console.log("scrollHeight:++++++++++++",scrollHeight);
    console.log("scrollTop:+++++++++++++",scrollTop);
    console.log("clientHeight:============",clientHeight);
    if(scrollTop + clientHeight >= scrollHeight && fetching === false){
        fetchMoreComment()
    };
}

// useEffect(() => {
// console.log('sajfljdasfijsoijfsfskjf');
//     // window.addEventListener("scrooll",handleScroll);
//     return()=>{
//         // window.removeEventListener("scroll",handleScroll);
//     };
// },[]);

const List = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(PostGet_REQUEST())
    }, [])

    // list 값 가져오기
    const data = useSelector(state => state.post.list)
    useEffect(() => { }, [data])

    let list = []
    if (data !== undefined) {
        const handleClick = (idx) => {
            dispatch(PostView_IDX(idx))
            Router.push(`/board/view`)
        }
        let reverseitem = data.map(item=>item).reverse()       
        list = reverseitem.map((v) => {            
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
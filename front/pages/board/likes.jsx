import Head from 'next/head'
import { useEffect } from 'react'
import SearchBar from '../../component/common/SearchBar'
import WebLayout from "../../component/layout/WebLayout"
import PostList from '../../component/list/PostList'
import { useDispatch,useSelector } from 'react-redux'
import { GetLikes_REQUEST, PostView_REQUEST } from '../../reducers/post'
import Router from 'next/router'

const Likes = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(GetLikes_REQUEST())
    },[])

    const data = useSelector(state=>state.post.list)
    
    useEffect(()=>{

    },[data])

    let list = []
    if(data!==undefined){
        const handleClick = (idx) => {
            dispatch(PostView_REQUEST(idx))
            Router.push('./view')
        }
        

        list = data.map((v)=>{
            return(
                <>
                    <tr key={v.id}>
                        <td onClick={()=>handleClick(v.id)}>{v.title}</td>
                        <td>{v.nickName}</td>
                        <td>{v.hit}</td>
                        <td>{v.date}</td>
                    </tr>
                </>
            )
        })
    }
    return (
        <>
            <Head>
                <title>Gamgwi | 하트</title>
            </Head>
            <WebLayout>
                <PostList list={list} />
                <SearchBar/>
            </WebLayout>
        </>
    )
}

export default Likes
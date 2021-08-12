import Head from 'next/head'
import { useEffect } from 'react'
import SearchBar from '../../component/common/SearchBar'
import WebLayout from "../../component/layout/webLayout"
import PostList from '../../component/list/PostList'
import { useDispatch,useSelector } from 'react-redux'
import { GetLikes_SUCCESS } from '../../reducers/post'


const Likes = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(GetLikes_SUCCESS())
    },[])

    const data = useSelector(state=>state.post.list)
    console.log('likessssssssssssssssssssssss==========',data)
    useEffect(()=>{

    },[data])

    let list = []
    if(data!==undefined){
        

        list = data.map((v)=>{
            return(
                <>
                    <tr key={v.id}>
                        <td>{v.title}</td>
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
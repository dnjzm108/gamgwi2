  
import {useRouter} from 'next/router'
import Head from 'next/head'
import PostList from '../../component/list/PostList'
import WebLayout from '../../component/layout/webLayout'
import SearchBar from '../../component/common/SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import {useEffect} from 'react'
import Router from 'next/router'


const Search = () => {
    const router = useRouter()
    const {category} = router.query
    const data = useSelector(state => state.post.searchData)

    console.log(data,'searches/search.jsx')

    useEffect(()=>{

    },[data])

    let list = []
    list = data.map((v)=>{
        return(
            <tr key={v.id}>
                <td>{v.title}</td>
                <td>{v.nickName}</td>
                <td>{v.hit}</td>
                <td>{v.date}</td>
            </tr>
        )
    })

   
    
    return(
        <>
            <Head>
                <title>Gamgwi | {category}</title>
            </Head>
            <WebLayout>
                <PostList list={list}/>
                <SearchBar />
            </WebLayout>
        </>
    )
}

export default Search
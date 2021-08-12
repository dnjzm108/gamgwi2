import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SearchBar from '../../component/common/SearchBar'
import WebLayout from "../../component/layout/webLayout"
import LikesList from '../../component/list/LikesList'


const Likes = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        //dispatch()
    })
    return (
        <>
            <Head>
                <title>Gamgwi | 하트</title>
            </Head>
            <WebLayout>
                <LikesList />
                <SearchBar/>
            </WebLayout>
        </>
    )
}

export default Likes
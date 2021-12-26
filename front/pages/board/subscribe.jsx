import Head from 'next/head';
import WebLayout from '../../component/layout/WebLayout';
import Styled from 'styled-components';
import Top from '../../component/subscribe/Top'
import { useDispatch, useSelector } from "react-redux"
import { useEffect,useState } from 'react';
import { GetAllSubscribe_Request } from '../../reducers/subscribe'

const Subscribe = () => {
    // const userid = useSelector(state => state.user.user_info.userid)
    // const [state,setState] = useState(true)
    // const dispatch = useDispatch()

    // useEffect(()=>{
    //     let data = {userid,state}
    //     dispatch(GetAllSubscribe_Request(data))
    // },[state])

    return(
        <>
            <Head>
                <title>Gamgwi | 구독</title>
            </Head>
            <WebLayout>
                <Top/>
            </WebLayout>
        </>
    )
}

export default Subscribe


import Head from 'next/head'
import BasicLayout from '../../component/layout/BasicLayout'
import Join_form from "../../component/user/join_form"
// import Styled from "styled-components";
import { useSelector,useDispatch } from 'react-redux';
import { useEffect,useCallback } from 'react'
import Router from "next/router"


const Join = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.user)

    useEffect(()=>{
dispatch({type:'test'})
    },[])

    useEffect(() => {
        if (data.user_info !== undefined) {
             if (data.user_info.userIdx !== undefined) {
                 Router.push('/home')
             }else{
                 //alert(data.data)
             }

        }
    }, [data.user_info])

    return (
        <>
            <Head>
                <title>Gamgwi | join</title>
            </Head>
            <BasicLayout>
                <Join_form>
                </Join_form>
            </BasicLayout>
        </>
    )
}

export default Join

import Head from 'next/head'
import Router from "next/router"
import LoginBtn from "../component/common/LoginBtn"
import Logo from "../component/common/Logo"
import BasicLayout from '../component/layout/BasicLayout'
import { useSelector,useDispatch } from 'react-redux';
import {UserCookieCheck} from '../reducers/user'
import { useEffect,useCallback } from 'react'
import Login from './user/login'

const Index = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.user)
    
    useEffect(() => {
        dispatch(UserCookieCheck())
    }, [])

    if (data.user_info.userIdx !== undefined){
        Router.push('/home')
    }



    return (
        <>
            <Head>
                <title>Gamgwi</title>
            </Head>
            <BasicLayout>
                <Login/>
            </BasicLayout>

        </>
    )
}

export default Index



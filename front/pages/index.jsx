import Head from 'next/head'
import Router from "next/router"
import LoginBtn from "../component/common/LoginBtn"
import Logo from "../component/common/Logo"
import BasicLayout from '../component/layout/BasicLayout'
import { useSelector,useDispatch } from 'react-redux';
import {UserCookieCheck} from '../reducers/user'
import { useEffect,useCallback } from 'react'

const Index = () => {
    const dispatch = useDispatch()
    

    const data = useSelector(state => state.user)

    useEffect(() => {
        dispatch(UserCookieCheck())
        console.log('리렌더 되기전',data);
        if (data.user_info.userIdx !== undefined){
            console.log(data.user_info);
                 Router.push('/home')
        }else{
            
            Router.push('/user/login')
        }
    }, [data.user_info])



    return (
        <>
            <Head>
                <title>Gamgwi</title>
            </Head>
            <BasicLayout>
                <Logo />
                <LoginBtn />
            </BasicLayout>

        </>
    )
}

export default Index


